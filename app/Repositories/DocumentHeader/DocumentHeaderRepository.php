<?php


namespace App\Repositories\DocumentHeader;
use App\Http\Resources\Document\DocumentResource;
use App\Jobs\YearlyContractInvoice;
use App\Models\AttendantDocumentHeader;
use App\Models\BreakSettlement;
use App\Models\Document;
use App\Models\DocumentCompanyModuleStatus;
use App\Models\DocumentHeader;
use App\Models\DocumentHeaderDetail;
use App\Models\GeneralCustomTable;
use App\Models\ItemBreakDown;
use App\Models\Serial;
use App\Models\VoucherHeader;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Booking\Entities\Setting;
use Modules\RecievablePayable\Entities\RpBreakDown;
use Modules\RecievablePayable\Entities\RpInstallmentPaymentType;
use function Symfony\Component\HttpKernel\Log\format;

class DocumentHeaderRepository implements DocumentHeaderInterface
{
    public function __construct(private \App\Models\DocumentHeader $model ,private DocumentHeaderDetail $modelDetail ,private ItemBreakDown $modelBreak  )
    {
        $this->model = $model;
        $this->modelDetail = $modelDetail;
        $this->modelBreak = $modelBreak;
    }

    public function all($request)
    {
        $models = $this->model->filter($request)->data()->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if($request->patient_id )
        {
            $models->where('patient_id',$request->patient_id);
        }

        if($request->document_id)
        {
            $models->where('document_id',$request->document_id);
        }

        if($request->start_date && $request->end_date)
        {
            $models->where(function ($q) use ($request) {
                $q->when($request->start_date && $request->end_date, function ($q) use ($request) {
                    $q->whereDate('date', ">=", $request->start_date)
                        ->whereDate('date', "<=", $request->end_date);
                });
            });
        }


        if($request->is_related_document)
        {
            $document = Document::find($request->document_id);
            $documentHeaderUnsetId = $document->documentRelatedHeader->where('related_document_number','!=',null)->pluck('related_document_number')->toArray();
            if ($request->is_related_document == 1)
            {
                $models->whereIn('id',$documentHeaderUnsetId);
            }elseif ($request->is_related_document == 2)
            {
                $models->whereNotIn('id',$documentHeaderUnsetId);
            }
        }

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }


    public function checkOutPrint($id)
    {

        return  $models = $this->model->print()->find($id);


    }

    public function customerRoom($request)
    {
     return   $models = $this->model->with(['customer','documentHeaderDetails'])->where('document_id',33)->where('complete_status','UnDelivered')
         ->whereHas('documentHeaderDetails',function ($q) use ($request){
            $q->where('unit_id',$request->unit_id)
                ->where(function ($q) use ($request ) {
                    $q->where(function ($qu) use ($request) {
                        $qu->where('date_from', '>=', $request->date_from )
                            ->where('date_from', '<=', $request->date_to );
                    })->orWhere(function ($que) use ($request) {
                        $que->where('date_to', '>=', $request->date_from )
                            ->where('date_to', '<=', $request->date_to);
                    })->orWhere(function ($quer) use ($request) {
                        $quer->where('date_from', '<=', $request->date_from )
                            ->where('date_to', '>=', $request->date_to);
                    });
                });

        })->first();
    }

    public function allDocumentHeader($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function getDateRelatedDocumentId($request)
    {
        $document = Document::find($request->related_document_id);
        $documentHeaderUnsetId = $document->documentRelatedHeader->where('document_id',$request->document_id)->where('related_document_id',$request->related_document_id)->pluck('related_document_number')->toArray();
        if ($document->is_copy == 1){
            $models = $this->model->filter($request)->
            orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC')
                ->where('document_id',$request->related_document_id)
                ->whereNotIn('id',$documentHeaderUnsetId)
                ->where('branch_id',$request->branch_id);
        }
        if ($document->is_copy == 0){
            $models = $this->model->filter($request)->
            orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC')
                ->where('document_id',$request->related_document_id)->where('complete_status','UnDelivered')
                ->where('branch_id',$request->branch_id);
        }
        if ($document->need_approve == 1){
            $models->where('document_status_id',2);
        }

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }


    public function find($id)
    {
        $data = $this->model->relation()->find($id);
        return $data;
    }
    public function generalDocument($request,$header_details){
        $document = Document::find($request['document_id']);
        if ($document){
            $data = [];
            $data['invoice_discount'] = 0;
            $data['net_invoice'] =0;
            $data['sell_method_discount'] =0;
            $data['unrealized_revenue'] =0;
            $data['external_commission'] =0;

            if ($request['total_invoice'] !=0) {
                $data['invoice_discount'] = ($request['invoice_discount'] * $header_details['total']) / $request['total_invoice'];
                $data['net_invoice'] = ($request['net_invoice'] * $header_details['total']) / $request['total_invoice'];
                if ($request['sell_method_id']){
                    $data['sell_method_discount']   = $request['sell_method_id'] != 1 ? ($request['sell_method_discount']  * $header_details['total']) / $request['total_invoice'] : $header_details['sell_method_discount'] ;
                }
                $data['unrealized_revenue']        = ( ($request['unrelaized_revenue']  * $header_details['total']) / $request['total_invoice']) * (isset($document->attributes['unrealized_revenue'])?$document->attributes['unrealized_revenue']:0);
                if (isset($request['external_commission']))
                {
                    $data['external_commission']       = ( ($request['external_commission'] * $header_details['total']) / $request['total_invoice']) * (isset($document->attributes['commission'])?$document->attributes['commission']:0);
                }
            }

            return  $data;
        }
        return 'false';

    }

    public function objcetStatus($request)
    {
        $status =  DocumentCompanyModuleStatus::where([
            ['company_id',$request['company_id']],
            ['document_id',$request['document_id']],
            ['document_module_type_id',$request['document_module_type_id']],
        ])->first();
        if ($status){
            return $status->status_id;
        }
        return "null";


    }


    public function updateDocumentHeader($request)
    {

          $max_date_check_out = $request['date'] ;

          $data_check_in     =  $this->model->with('documentHeaderDetails')->find($request['related_document_number']);

          $max_date_check_in =  $data_check_in->documentHeaderDetails()->first()->date_to;
          $min_date_check_in =  $data_check_in->documentHeaderDetails()->first()->date_from;

          $check_in_detail   =  $data_check_in->documentHeaderDetails()->first();

          $start      = Carbon::parse($min_date_check_in);
          $end        = Carbon::parse($max_date_check_out);

        if ($max_date_check_in != $max_date_check_out ){

            $count       = $start->diffInDays($end);

            $invoice_discount = 0;

            if ($check_in_detail['invoice_discount'] != 0){

                $price_discount   =  $check_in_detail['invoice_discount']  / $check_in_detail['rent_days'];
                $invoice_discount = $price_discount * $count ;
            }

            $total       = $count  * $check_in_detail['price_per_uint'] ;
            $net_invoice = $total  -  $invoice_discount ;

            $check_in_detail->update([
                'rent_days'        =>  $count,
                'quantity'         =>  $count,
                'total'            =>  $total,
                'date_to'          =>  $request->date,
                'net_invoice'      =>  $net_invoice,
                'discount'         =>  $invoice_discount,
                'invoice_discount' =>  $invoice_discount,
            ]);

            $discount_header = $invoice_discount != 0 ? $invoice_discount  : $request['invoice_discount'] ;

            $data_check_in->update([
                'total_invoice'      => $total,
                'invoice_discount'   => $discount_header,
                'net_invoice'        => $total - $discount_header,
            ]);

            return true;

        }

        return false;
    }

    public function createArrayHeaderBreakDown($downs,$data){
        foreach ($downs as $down){
            RpBreakDown::create([
                'instalment_date'       => $data['date'],
                'rate'                  => 1,
                'repate'                => 1,
                'currency_id'           => 1,
                'document_id'           => $data['document_id'],
                'customer_id'           => $down['customer_id'],
                'break_id'              => $data['id'],
                'instalment_type_id'    => 1,
                'break_type'            => 'documentHeader',
                'debit'                 => ($data->document->attributes && $data->document->attributes['customer'] == 1)?$down['net_invoice']:0,
                'credit'                => ($data->document->attributes && $data->document->attributes['customer'] == -1)?$down['net_invoice']:0,
                'total'                 => $down['net_invoice'],
                'installment_statu_id'  => 1,
                'client_type_id'        => $down['client_type_id'],
            ]);
        }
        return true;

    }


    public function CalculateDate($break_downs,$header)
    {
        $break_down_date_from  =  $break_downs['header_details'][0]['date_from'];
        $break_down_date_to    =  $break_downs['header_details'][0]['date_to'];

        $PaymentType = RpInstallmentPaymentType::find($break_downs['installment_payment_type_id']);
        $date_instalment =  \Carbon\Carbon::parse($break_down_date_from);

        if (strlen($break_downs['due_day']) == 1){
            $date_old =    Carbon::parse($break_down_date_from)->format('Y-m').'-0'.$break_downs['due_day'];
            $date_old_print =  Carbon::parse($break_down_date_from)->format('Y-m').'-0'.$break_downs['print_day'];
            $date_old_end =    $break_down_date_to;
            $date_instalment =  \Carbon\Carbon::parse($date_old);
            $date_instalment_print =  \Carbon\Carbon::parse($date_old_print);


        }else{
            $date_old =    Carbon::parse($break_down_date_from)->format('Y-m').'-'.$break_downs['due_day'];
            $date_old_print =    Carbon::parse($break_down_date_from)->format('Y-m').'-'.$break_downs['print_day'];
            $date_old_end =    $break_down_date_to;
            $date_instalment =  \Carbon\Carbon::parse($date_old);
            $date_instalment_print =  \Carbon\Carbon::parse($date_old_print);
        }


//        $cont_date = 0;
        $array_date= [];

        $i = 0 ;
        $x = 1 ;
        for ($i;$i < $x;$i++){
            if ($i == 0){

                $date = $date_old;
                $date_print = $date_old_print;
            }else{
                $cont_date  =  $PaymentType->freq_period ;

                if($PaymentType->step == "D"){
                    $date = $date_instalment->addDays($cont_date)->format('Y-m-d');

                    $date_print = $date_instalment_print->addDays($cont_date)->format('Y-m-d');
                }

                if ($PaymentType->step == "M"){

                    $date = $date_instalment->addMonths($cont_date)->format('Y-m-d');
                    $date_print = $date_instalment_print->addMonths($cont_date)->format('Y-m-d');

                }

                if ($PaymentType->step == "Y"){

                    $date = $date_instalment->addYears($cont_date)->format('Y-m-d');
                    $date_print = $date_instalment_print->addYears($cont_date)->format('Y-m-d');

                }
            }


                if ($date_old_end > $date){

                    $x++;
                    $array_date['date'][$i] = [ 'due_day' => $date ,'print_day' => $date_print ,'header_id' => $header->id];
                }

        }

        return  $array_date;


    }



    public function createInvoiceHeaderBreakDown($request,$header){
//        return floor(1000 / 12);


        $array               =  $this->CalculateDate($request,$header);

        $total_net_invoice   = $request['net_invoice'] / count($array['date']);
        $total_total_invoice = $request['total_invoice'] / count($array['date']);

        if ($request['invoice_discount'] != 0){
            $total_invoice_discount  = $request['invoice_discount'] / count($array['date']);
        }else{
            $total_invoice_discount = 0;
        }

        $sub_net_invoice      = 0;
        $sub_invoice_discount = 0;
        $sub_total_invoice = 0;

        $index_count  = count($array['date']) - 1;
        $array_header = [];


        foreach ($array['date'] as $index => $item){

            if ($index != $index_count ){
                $sub_net_invoice      +=  round($total_net_invoice,3);
                $sub_invoice_discount +=  round($total_invoice_discount,3);
                $sub_total_invoice    +=  round($total_total_invoice,3);
            }

            if ($index == $index_count ){

                $total_net       = round($request['net_invoice']       - $sub_net_invoice ,3) ;
                $total_discount  =  round($request['invoice_discount'] - $sub_invoice_discount,3);
                $total_invoice   =  round($request['total_invoice']    - $sub_total_invoice,3);


            }else{
                $total_net       = round($total_net_invoice,3);
                $total_discount  = round($total_invoice_discount,3);
                $total_invoice   = round($total_total_invoice,3);
            }

            $item['total_net']      = $total_net;
            $item['total_discount'] = $total_discount;
            $item['total_invoice']  = $total_invoice;


            YearlyContractInvoice::dispatch($item)->delay(Carbon::parse($item['print_day']));

        }
//        return  $array['date'];

    }

    public function create($request){


        return DB::transaction(function () use ($request) {

            if (generalCheckDateModelFinancialYear($request['date']) == "true"){

                if (isset( $request['break_settlement'] )){
                   $BreakSettlement =  BreakSettlement::create($request['break_settlement'][0]);
                   $break_Settlement_id = $BreakSettlement->id;

                }else{
                    $break_Settlement_id = null;
                }

                if (isset($request['voucher_headers'])){
                    VoucherHeader::whereIn('id',$request['voucher_headers'])->update([ "break_settlement_id" => $break_Settlement_id ]);
                }


                $data_request = $request;

                $serial = Serial::where([['branch_id',$request['branch_id']],['document_id',$request['document_id']]])->first();
                $data_request['serial_id'] = $serial ? $serial->id:null;

                $data = $this->model->create(array_merge( $data_request,[ "break_settlement_id" => $break_Settlement_id  ] ));


                if (isset($request['attendants'])){
                    $data->attendants()->attach($request['attendants']);
                }

                if (isset($data_request['related_document_number']) && $request['document_id'] != 48){
                    $model_find =  $this->find($data_request['related_document_number']);
                    if ($model_find){
                        $model_find->update([
                            "complete_status" => 'Delivered'
                        ]);
                    }
                }


                foreach ($request['header_details'] as $header_details ){

                    $general_document = $this->generalDocument($request,$header_details);
                    $status_id =  $this->objcetStatus($request);

                    $id =  $this->modelDetail->create(array_merge($header_details,[
                        'document_header_id'   =>$data->id,
                        'invoice_discount'     =>$general_document['invoice_discount'],
                        'net_invoice'          =>$general_document['net_invoice'],
                        'sell_method_discount' =>$general_document['sell_method_discount'],
                        'unrealized_revenue'   =>$general_document['unrealized_revenue'],
                        'external_commission'  =>$general_document['external_commission'],
                        'unit_status_id'       =>$status_id,
                        "break_settlement_id"  =>$break_Settlement_id,
                    ]));
                    if (isset($header_details['break_downs']))
                    {
                        foreach ($header_details['break_downs'] as $break){
                            $this->modelBreak->create(array_merge($break,['document_header_detail_id'=>$id->id]));
                        }
                    }
                    if (isset($header_details['prefix_related'])){

                        $model_find =  $this->model->where('prefix',$header_details['prefix_related'])->first();
                        if ($model_find){
                            $model_find->update([
                                "complete_status" => 'Delivered',
                                "related_document_id" => $model_find['document_id']??$data['document_id'],
                                "related_document_number" => $model_find['id']??$data['id'],
                                "related_document_prefix" => $model_find['serial_number']??$data['serial_number'],
                            ]);
                        }

                    }
                }

                if ($request['document_id'] == 43){
                     $this->createInvoiceHeaderBreakDown($request,$data);
                }

                if ($request['is_break'] == 1)
                {
                    RpBreakDown::create([
                        'instalment_date' => $request['date'],
                        'rate' => 1,
                        'repate' => 1,
                        'currency_id' => 1,
                        'document_id' => $request['document_id'],
                        'customer_id' => $request['customer_id'],
                        'break_id' => $data['id'],
                        'instalment_type_id' => 1,
                        'break_type' => 'documentHeader',
                        'debit' => ($data->document->attributes && $data->document->attributes['customer'] == 1)?$data['net_invoice']:0,
                        'credit' => ($data->document->attributes && $data->document->attributes['customer'] == -1)?$data['net_invoice']:0,
                        'total' =>$data['net_invoice'],
                        'installment_statu_id' =>1,
                        'client_type_id' =>1,
                    ]);
                }
                if ($request['document_id'] == 34){
                       $this->updateDocumentHeader($data);
                }

                if (isset($request['header_break_downs'])){
                    $this->createArrayHeaderBreakDown($request['header_break_downs'],$data);
                }
                if ($request['document_id'] == 48){
                    $this->updateCheckInDocument($data);
                }

                return $data;

            }
            return 'false';
        });
    }
    public function updateCheckInDocument($data){
        $transfer_header = $this->model->find($data['id']);
        $transfer_detail = $transfer_header->documentHeaderDetails->last();

        $chek_in_header = $this->model->find($data['related_document_number']);
        $chek_in_detail = $chek_in_header->documentHeaderDetails->where('unit_id',$transfer_header->unit_id)->last();

        $old_rent_days_handel = $transfer_detail['rent_days'] - $chek_in_detail['rent_days'];
        $old_rent_days = $old_rent_days_handel < 0 ? $old_rent_days_handel * -1 : $old_rent_days_handel;
        $old_discount =  $chek_in_detail['discount'] / $chek_in_detail['rent_days'];
        $date_to = now();
        if ( Setting::find(2)->value >= $transfer_detail['check_in_time'])
        {
            $date_to = Carbon::parse($date_to)->subDay()->format('Y-m-d');
        }
        $chek_in_detail->update([
            'unit_status_id' => null,
            'date_to' => $date_to,
            'rent_days' => $old_rent_days,
            'quantity' => $old_rent_days,
            'invoice_discount' => $old_discount * $old_rent_days,
            'discount' => $old_discount * $old_rent_days,
            'total' => $old_rent_days * $chek_in_detail['price_per_uint'],
            'net_invoice' => $old_discount ? ($old_rent_days * $chek_in_detail['price_per_uint']) / $old_discount : $old_rent_days * $chek_in_detail['price_per_uint'],
        ]);

        $this->modelDetail->create([
            'document_header_id' => $chek_in_header['id'],
            'date_from' => $transfer_detail['date_from'],
            'date_to' => $transfer_detail['date_to'],
            'rent_days' => $transfer_detail['rent_days'],
            'unit_type' => $transfer_detail['unit_type'],
            'quantity' => $transfer_detail['quantity'],
            'price_per_uint' => $transfer_detail['price_per_uint'],
            'total' => $transfer_detail['total'],
            'invoice_discount' => $transfer_detail['invoice_discount'],
            'net_invoice' => $transfer_detail['net_invoice'],
            'unit_id' => $transfer_detail['unit_id'],
            'check_in_time' => $transfer_detail['check_in_time'],
            'discount' => $transfer_detail['discount'],
            'note' => $transfer_detail['note'],
            'category_booking' => $transfer_detail['category_booking'],
            'unit_status_id' => 16
        ]);
        $total_invoice = $chek_in_header->documentHeaderDetails()->sum('total');
        $invoice_discount = $chek_in_header->documentHeaderDetails()->sum('discount');
        $chek_in_header->update([
           'total_invoice' => $total_invoice,
           'invoice_discount' => $invoice_discount,
            'net_invoice' => $total_invoice - $invoice_discount,
        ]);
    }

    public function update($request,$id){
        if (generalCheckDateModelFinancialYear($request['date']) == "true"){
                $data = $this->model->find($id);
                $check_paid_amount = RpBreakDown::where('break_id',$data['id'])->where('document_id',$data->document_id)->whereHas('breakSettlements')->first();
                if($check_paid_amount)
                    return 'paid_befor';
                if (isset($request['related_document_number'])){
                    $related_document_data  = $this->model->find($data->related_document_number);
                    if ($related_document_data){
                        $related_document_data->update([
                            "complete_status" => 'UnDelivered'
                        ]);
                    }
                    $related_document_number  = $this->model->find($request['related_document_number']);
                    $related_document_number->update([
                        "complete_status" => 'Delivered'
                    ]);
                }
                $data->update($request);
                if (isset($request['attendants'])){
                    $data->attendants()->sync($request['attendants']);
                }
                if(isset($request['header_details'])){
                    if ($data->documentHeaderDetails){
                        foreach ($data->documentHeaderDetails as $Details){
                            foreach ($Details->itemBreakDowns as $break){
                                $break->delete();
                            }
                            $Details->delete();
                        }
                    }
                    foreach ($request['header_details'] as $header_details ){
                        $general_document = $this->generalDocument($request,$header_details);
                        $status_id =  $this->objcetStatus($request);

                        $id =  $this->modelDetail->create(array_merge($header_details,[
                            'document_header_id'   =>$data->id,
                            'invoice_discount'     =>$general_document['invoice_discount'],
                            'net_invoice'          =>$general_document['net_invoice'],
                            'sell_method_discount' =>$general_document['sell_method_discount'],
                            'unrealized_revenue'   =>$general_document['unrealized_revenue'],
                            'external_commission'  =>$general_document['external_commission'],
                            'unit_status_id'       =>$status_id,
                        ]));
                        if (isset($header_details['prefix_related'])){
                            $model_find =  $this->model->where('prefix',$header_details['prefix_related'])->first();
                            if ($model_find){
                                $model_find->update([
                                    "complete_status" => 'Delivered',
                                    "related_document_id" => $model_find['document_id']??$data['document_id'],
                                    "related_document_number" => $model_find['id']??$data['id'],
                                    "related_document_prefix" => $model_find['serial_number']??$data['serial_number'],
                                ]);
                            }
                        }
                        if (isset($header_details['break_downs'])) {
                            foreach ($header_details['break_downs'] as $break) {
                                $this->modelBreak->create(array_merge($break, [
                                    'document_header_detail_id' => $id->id,
                                    'serial_number' => $data->prefix,
                                    'client_type_id' =>1,
                                ]));
                            }
                        }
                    }
                }

                if (isset($request['header_break_downs'])){
                    RpBreakDown::where('break_id',$data['id'])->where('document_id',$data->document_id)->delete();
                    $this->createArrayHeaderBreakDown($request['header_break_downs'],$data);
                }

                return $data;
        }
        return 'false';


    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    public function delete($id){

        $model = $this->model->find($id);
        $checkIn =  $this->model->where('document_id',33)->find($model->related_document_number);
        if ($checkIn){
            $checkIn->update([
                "complete_status" => 'UnDelivered',
            ]);
        }
        if ($model->documentHeaderDetails){
            foreach ($model->documentHeaderDetails as $Details){
                  $prefix_related = $this->model->where('prefix',$Details['prefix_related'])->first();
                if ($prefix_related){
                    $prefix_related->update([
                        "complete_status" => 'UnDelivered',
                        "related_document_id" => $prefix_related['related_document_id'] == 33 || 35 ?$prefix_related['related_document_id']:null,
                        "related_document_number" => $prefix_related['related_document_id'] == 33 || 35 ?$prefix_related['related_document_number']:null,
                        "related_document_prefix" => $prefix_related['related_document_id'] == 33 || 35 ?$prefix_related['related_document_prefix']:null,
                    ]);
                }
                foreach ($Details->itemBreakDowns as $break){
                    $break->delete();
                }
                $Details->delete();
            }
        }
        if ($model->break_settlement_id != null){
            VoucherHeader::where('break_settlement_id',$model->break_settlement_id)->update(['break_settlement_id' => null]);
            BreakSettlement::where('id',$model->break_settlement_id)->delete();
        }

        $model->delete();
    }

    public function createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = null, $i , $date = null)
    {
        $sum_discount    = 0;
        $sum_total       = 0;
        $sum_net_invoice = 0;

        $columns_create_document_header =  collect($model)->except(['id','complete_status','deleted_at','created_at','updated_at','date','related_document_id','related_document_prefix','related_document_number','serial_number','prefix','document_id','serial_id']);


        $serial = Serial::where([['branch_id',$model['branch_id']],['document_id',35]])->first();
        $serial_id = $serial ? $serial->id:null;
        if ($checkDate == null){
            $dateHeader =  Carbon::parse($detail->date_from)->format('Y-m-d');
        }elseif ($checkDate == 1){
            $dateHeader =  Carbon::parse($detail->date_from)->addDays($i)->format('Y-m-d');
        }elseif ($checkDate == 2){
            $dateHeader =  now()->format('Y-m-d');
        }elseif ($checkDate == 3){
            $dateHeader =  $date;
        }
        // Create Document Header
        $document_header = $this->model->create(array_merge($columns_create_document_header->all(),[
            'date' => $dateHeader ,
            'document_id'         => 35,
            'related_document_id' => 33,
            'related_document_number' => $model['id'],
            'related_document_prefix' => $model['serial_number'],
            'serial_id'               => $serial_id,
        ]));
        if ($model->attendants){
            $document_header->attendants()->attach($model->attendants->pluck('id')->toArray());
        }

        $document_header->refresh();

        $this->createSerial($document_header);

        // Create Document Header Detail

        $item_discount = $detail['discount']  /  $detail['rent_days'];
        if ($model['invoice_discount'] > 0 && $detail['discount'] == 0)
        {
            $sum_discount = $model['invoice_discount'];
        }else{
            $sum_discount += $item_discount;
        }

        $total        = $detail['price_per_uint']  *  1 ;
        $sum_total   += $total;

        $net_invoice      = $total  -  $item_discount  ;
        $sum_net_invoice += $net_invoice;

        if ($checkDate == null){
            $date_detail =  Carbon::parse($detail->date_from)->format('Y-m-d');
        }elseif ($checkDate == 1){
            $date_detail =  Carbon::parse($detail->date_from)->addDays($i)->format('Y-m-d');
        }elseif ($checkDate == 2){
            $date_detail =  now()->format('Y-m-d');
        }elseif ($checkDate == 3){
            $date_detail =  $date;
        }



        $this->modelDetail->create([

            'document_header_id' => $document_header->id,
            'date_from'          => $date_detail ,
            'date_to'            => $date_detail ,
            'check_in_time'      => now()->format('H:i'),
            'rent_days'          => 1,
            'quantity'           => 1,
            'discount'           => $item_discount,
            'total'              => $total ,
            'invoice_discount'   => $item_discount ,
            'net_invoice'        => $total  -  $item_discount  ,
            'unit_type'          => $detail['unit_type'] ,
            'price_per_uint'     => $detail['price_per_uint'] ,
            'unit_id'            => $detail['unit_id'],
            'note'               => $detail['note'],
//            'unit_status_id'     => $detail['unit_status_id'],
        ]);

        $document_header->update([
            "total_invoice"    => $sum_total,
            "invoice_discount" => $sum_discount,
            "net_invoice"      => $sum_net_invoice,
        ]);

    }

//    public function createDailyInvoice()
    public function checkBooking()
    {
        // object Check_Out Booking
        $booking = Setting::find(2);

        // check Time Setting  == || >=   Time now
        if (Carbon::parse($booking->value)->format('H:i:s') <= now()->format('H:i:s')){

            // check in model DocumentHeader -> document_id == 33 &&  related_document_id == null all()
            $models_document_header =  $this->model->with('documentHeaderDetails')->where('document_id',33)->where('complete_status','UnDelivered')->get();

            foreach ($models_document_header as $index =>  $model) {

                $details  =  $model->documentHeaderDetails()->get();


                foreach ($details as $in => $detail){

                    $i = 0;
                    $data = [];
                    $start      = Carbon::parse($detail->date_from);
                    $end        = Carbon::parse($detail->date_to);
                    $count_date = $start->diffInDays($end) ;


                     $min_date = DocumentHeaderDetail::where('unit_id',$detail->unit_id)->whereHas('documentHeader',function ($q) use ($detail) {
                        $q->where('related_document_number',$detail->document_header_id);
                    })->min('date_from');



                    $min =  isset($min_date) ? Carbon::parse($min_date)->format('Y-m-d') : null ;

                    $max_date = DocumentHeaderDetail::where('unit_id',$detail->unit_id)->whereHas('documentHeader',function ($q) use ($detail) {
                        $q->where('related_document_number',$detail->document_header_id);
                    })->max('date_from');

                    $max =  isset($max_date) ? Carbon::parse($max_date)->format('Y-m-d') : null ;


                    if (Carbon::parse($detail->date_from)->format('Y-m-d')  != $min ) {
                        for ($i ; $i <= $count_date; $i++){

                            if ($i == 0){

                                if (Carbon::parse($detail->date_from)->format('Y-m-d')  != $min){

                                    if (Carbon::parse($detail->date_from)->format('Y-m-d') == now()->format('Y-m-d')){

                                        $data[0] =  Carbon::parse($detail->date_from)->format('Y-m-d') ;
                                           $this->createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = null,0);
                                        break ;

                                    }
                                       $this->createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = null,0);
                                    $data[0] =  Carbon::parse($detail->date_from)->format('Y-m-d') ;


                                }else{

                                    break ;
                                }

                            }else{

                                if (Carbon::parse($detail->date_from)->format('Y-m-d')  != $min){

                                    if (Carbon::parse($detail->date_from)->addDays($i)->format('Y-m-d') == now()->format('Y-m-d')){

                                        $data[$i] =  Carbon::parse($detail->date_from)->addDays($i)->format('Y-m-d') ;
                                        $this->createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = 1,$i);
                                        break ;

                                    }

                                    $this->createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = 1,$i);
                                    $data[$i] =  Carbon::parse($detail->date_from)->addDays($i)->format('Y-m-d') ;


                                }


                            }

                        }

                    }else{

                        $max_date_end        = Carbon::parse($max_date);
                        $count_else = $max_date_end->diffInDays($end) ;
                        if ($count_else > 1){

                            for ($i ; $i <= $count_else; $i++){
                                if ($i == 0){
                                    $i = $i+1;
                                }

                                if (Carbon::parse($max_date)->addDays($i)->format('Y-m-d') <= now()->format('Y-m-d')){

                                    $data[$i] =  Carbon::parse($detail->date_to)->addDays($i)->format('Y-m-d') ;
                                    $this->createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = 3,$i,Carbon::parse($max_date)->addDays($i)->format('Y-m-d'));
                                    break ;
                                }

//                                $this->createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = 3,$i,Carbon::parse($max_date)->addDays($i)->format('Y-m-d'));
//                                $data[$i] =  Carbon::parse($max_date)->addDays($i)->format('Y-m-d') ;


                            }

                        }else{
                            if (Carbon::parse($detail->date_to)->format('Y-m-d')  >= now()->format('Y-m-d')){


                                if (Carbon::parse($detail->date_to)->format('Y-m-d')  != $max){
                                    if (now()->format('Y-m-d')  != $max){

                                        $this->createDailyInvoiceDocumentHeaderDetail($model,$detail,$checkDate = 2,0);
                                        $data[$i] = now()->format('Y-m-d') ;

                                    }
                                }
                            }
                        }


                    }

                }



            }

            return responseJson(200, "Success");
        }
        return responseJson(400, "Time Expires");

    }

    public function checkInCustomer()
    {
         $models = $this->model->where('document_id','33')->where('complete_status','UnDelivered')->whereHas('documentHeaderDetails',function ($q){
            $q->whereDate('date_to','<=',now()->format('Y-m-d'));
        })->with(['customer','documentHeaderDetails'=>function($q){
            $q->with('unit');
         }])->get();

       return  $models;
    }

    public function updateCheckInCustomer($request)
    {
        $models = $this->model->with(['documentHeaderDetails'=>function ($q) use ($request){
            $q->whereIn('id',$request->detail_ids);
        }])->find($request->header_id);

            $sum_total       = 0;
            $sum_discount    = 0;

            foreach ($models->documentHeaderDetails as $details){

                $start      = Carbon::parse($details->date_from);
                $end        = Carbon::parse($request->date);
                $count      = $start->diffInDays($end);
                $invoice_discount = 0;

                if ($details['invoice_discount'] != 0){

                    $price_discount   =  $details['invoice_discount']  / $details['rent_days'];
                    $invoice_discount = $price_discount * $count ;
                }

                $total       = $count  * $details['price_per_uint'] ;
                $net_invoice = $total  -  $invoice_discount ;

                $details->update([
                    'rent_days'        =>  $count,
                    'quantity'         =>  $count,
                    'total'            =>  $total,
                    'date_to'          =>  $request->date,
                    'net_invoice'      =>  $net_invoice,
                    'discount'         =>  $invoice_discount,
                    'invoice_discount' =>  $invoice_discount,
                ]);

                $sum_total       +=  $total;
                $sum_discount    +=  $invoice_discount;


            }
            $discount_header = $invoice_discount != 0 ? $invoice_discount  :$models['invoice_discount'] ;

            $models->update([
                'total_invoice'      => $sum_total,
                'invoice_discount'   => $discount_header,
                'net_invoice'        => $sum_total - $discount_header,

            ]);
        return responseJson(200, "Success");
    }

    public function createDailyCheckInCustomer()
    {

        $booking = Setting::find([2,3]);

        // check Time Setting  == || >=   Time now
        if (Carbon::parse($booking[0]->value)->format('H:i:s') <= now()->format('H:i:s') && $booking[1]->value == 1 ){

            $models = $this->model->where('document_id','33')->whereDoesntHave('documentNumber')->whereHas('documentHeaderDetails',function ($q){
                $q->whereDate('date_to','<=',now()->format('Y-m-d'));
            })->with('documentHeaderDetails')->get();

            foreach ($models as $model) {

                $sum_total       = 0;
                $sum_discount    = 0;

                foreach ($model->documentHeaderDetails as $details){

                    if ($details->date_to < now()->format('Y-m-d')){
                        $start      = Carbon::parse($details->date_from);
                        $end        = Carbon::parse($details->date_to)->addDay()->format('Y-m-d');

                        $count      = $start->diffInDays($end);

                        $invoice_discount = 0;

                        if ($details['invoice_discount'] != 0){

                            $price_discount   =  $details['invoice_discount']  / $details['rent_days'];
                            $invoice_discount = $price_discount * $count ;
                        }

                        $total       = $count  * $details['price_per_uint'] ;
                        $net_invoice = $total  -  $invoice_discount ;

                        $details->update([
                            'rent_days'        =>  $count,
                            'quantity'         =>  $count,
                            'total'            =>  $total,
                            'date_to'          =>  Carbon::parse($details->date_to)->addDay()->format('Y-m-d') ,
                            'net_invoice'      =>  $net_invoice,
                            'discount'         =>  $invoice_discount,
                            'invoice_discount' =>  $invoice_discount,
                        ]);

                        $sum_total       +=  $total;
                        $sum_discount    +=  $invoice_discount;

                    }


                }


                if ($sum_total != 0){
                    $discount_header = $sum_discount != 0 ? $sum_discount  : $model['invoice_discount'] ;
                    $model->update([
                        'total_invoice'      => $sum_total,
                        'invoice_discount'   => $discount_header,
                        'net_invoice'        => $sum_total - $discount_header,

                    ]);
                }


            }
            return responseJson(200, "Success");

        }

        return 500;

    }



    public function createDailyInvoice()
    {
        return DB::transaction(function () {

            // object Check_Out Booking
            $booking = Setting::find(2);
            $number = 0;
            // check Time Setting  == || >=   Time now
            if ($booking->value >= now()->format('H:i:s')){

                // check in model DocumentHeader -> document_id == 33 &&  related_document_id == null all()
                $models_document_header = $this->model->with('documentHeaderDetails')->where('document_id',33)->whereNull('related_document_id')->get();

                foreach ($models_document_header as   $model){

                    $check_header_details_date = $model->documentHeaderDetails()->whereDate('date_to','>=',now()->format('Y-m-d'))->get();

                    if ($check_header_details_date->count() > 0)
                    {
                        $columns_create_document_header =  collect($model)->except(['id','complete_status','deleted_at','created_at','updated_at','date','related_document_id','related_document_prefix','related_document_number','serial_number','prefix','document_id','serial_id']);


                        $serial = Serial::where([['branch_id',$model['branch_id']],['document_id',35]])->first();
                        $serial_id = $serial ? $serial->id:null;
                        // Create Document Header
                        $document_header = $this->model->create(array_merge($columns_create_document_header->all(),[
                            'date' => now()->format('Y-m-d'),
                            'document_id'         => 35,
                            'related_document_id' => 33,
                            'related_document_number' => $model['id'],
                            'related_document_prefix' => $model['serial_number'],
                            'serial_id'               => $serial_id,
                        ]));
                        if ($model->attendants){
                            $document_header->attendants()->attach($model->attendants->pluck('id')->toArray());
                        }

                        $document_header->refresh();

                        // Create Serial
                        $this->createSerial($document_header);

                        // Create Document Header Detail
                        $this->createBookingDocumentHeaderDetail($model,$document_header);
                    }

                }
                return responseJson(200, "Success");

            }
            return responseJson(400, "Time Expires");

        });
    }

    public function createSerial($model_header){

        $serials = generalSerial($model_header);
        $model_header->update([
            "serial_number" => $serials['serial_number'],
            "prefix" => $serials['prefix'],
        ]);
    }

    function createBookingDocumentHeaderDetail($model,$model_header){

        // columns used update 3 columns in  Document Header
        $sum_discount    = 0;
        $sum_total       = 0;
        $sum_net_invoice = 0;

        // check in relationship documentHeaderDetails  Exists in documentHeader
        if ($model->documentHeaderDetails){

            // check in relationship documentHeaderDetails    date_to  == || >  date now
            $model_header_details = $model->documentHeaderDetails()->whereDate('date_to','>=',now()->format('Y-m-d'))->get();

            foreach ($model_header_details as $HeaderDetails):

                $item_discount = $HeaderDetails['discount']  /  $HeaderDetails['rent_days'];
                $sum_discount += $item_discount;

                $total        = $HeaderDetails['price_per_uint']  *  1 ;
                $sum_total   += $total;

                $net_invoice      = $total  -  $item_discount  ;
                $sum_net_invoice += $net_invoice;

                $this->modelDetail->create([
                    'document_header_id' => $model_header->id,
                    'date_from'          => now()->format('Y-m-d'),
                    'date_to'            => now()->format('Y-m-d'),
                    'check_in_time'      => now()->format('H:i'),
                    'rent_days'          => 1,
                    'quantity'           => 1,
                    'discount'           => $item_discount,
                    'total'              => $total ,
                    'invoice_discount'   => $item_discount ,
                    'net_invoice'        => $total  -  $item_discount  ,
                    'unit_type'          => $HeaderDetails['unit_type'] ,
                    'price_per_uint'     => $HeaderDetails['price_per_uint'] ,
                    'unit_id'            => $HeaderDetails['unit_id'],
                    'note'               => $HeaderDetails['note'],
                ]);
            endforeach;
        }

        $model_header->update([
            "total_invoice"    => $sum_total,
            "invoice_discount" => $sum_discount,
            "net_invoice"      => $sum_net_invoice,
        ]);

    }

    public function getDocumentsCustomer($id,$request)
    {
//        return $request->units;
        $documentIgnore = [33,34,48];
        $data = [];
        $data['details'] = $this->modelDetail->whereIn('unit_id',explode(",", $request->units))->with(['unit','documentHeader'])->where('unit_type','Booking')->whereHas('documentHeader',function ($q) use ($id,$documentIgnore){
            $q->where('customer_id',$id)
                ->where('complete_status','UnDelivered')
                ->whereNotIn('document_id',$documentIgnore);
        })->get();

        $header = $this->modelDetail->whereIn('unit_id',explode(",", $request->units))->with(['documentHeader'=>function($q){
           $q->with('attendantsDocument');
       }])->where('unit_type','Booking')->whereHas('documentHeader',function ($q) use ($id,$documentIgnore){
           $q->where('customer_id',$id)
               ->where('complete_status','UnDelivered')
               ->where('document_id',35);
       })->first();

        $data['header'] = $header;

        $data['checkin'] = $header ? $this->modelDetail->where('document_header_id',$header['documentHeader']['related_document_number'])
            ->select('id','rent_days','discount','document_header_id')->with(['documentHeader:id,invoice_discount'])->first() : null;

        $data['voucher'] = VoucherHeader::with(['document:id,name,name_e,attributes','paymentMethod:id,name,name_e'])
            ->where('customer_id',$id)->whereIn('module_type_id',explode(",", $request->units))->whereNull('break_settlement_id')->get();


        return $data;
    }

    public function createDailyInvoiceOnline($request)
    {

        $model =  $this->model->
        with('documentHeaderDetails')->
        where('document_id',33)->
        where('complete_status','UnDelivered')->
        where('customer_id',$request->customer_id)->
        whereRelation('documentHeaderDetails','unit_id',$request->unit_id)->
        first();

        $sum_discount    = 0;
        $sum_total       = 0;
        $sum_net_invoice = 0;

        $columns_create_document_header =  collect($model)->except(['id','complete_status','deleted_at','created_at','updated_at','date','related_document_id','related_document_prefix','related_document_number','serial_number','prefix','document_id','serial_id']);

        $serial = Serial::where([['branch_id',$model['branch_id']],['document_id',35]])->first();
        $serial_id = $serial ? $serial->id:null;

        // Create Document Header
        $document_header = $this->model->create(array_merge($columns_create_document_header->all(),[
            'date' => $request->date ,
            'document_id'         => 35,
            'related_document_id' => 33,
            'related_document_number' => $model['id'],
            'related_document_prefix' => $model['serial_number'],
            'serial_id'               => $serial_id,
        ]));
        if ($model->attendants){
            $document_header->attendants()->attach($model->attendants->pluck('id')->toArray());
        }

        $document_header->refresh();
        $this->createSerial($document_header);
//
        // Create Document Header Detail
        $detail = $model->documentHeaderDetails()->first();

        $item_discount = $detail['discount']  /  $detail['rent_days'];

        if ($model['invoice_discount'] > 0 && $detail['discount'] == 0)
        {
            $sum_discount = $model['invoice_discount'];
        }else{
            $sum_discount += $item_discount;
        }

        $total        = $detail['price_per_uint']  *  1 ;
        $sum_total   += $total;

        $net_invoice      = $total  -  $item_discount  ;
        $sum_net_invoice += $net_invoice;



        $this->modelDetail->create([

            'document_header_id' => $document_header->id,
            'date_from'          => $request->date ,
            'date_to'            => $request->date ,
            'check_in_time'      => now()->format('H:i'),
            'rent_days'          => 1,
            'quantity'           => 1,
            'discount'           => $item_discount,
            'total'              => $total ,
            'invoice_discount'   => $item_discount ,
            'net_invoice'        => $total  -  $item_discount  ,
            'unit_type'          => $detail['unit_type'] ,
            'price_per_uint'     => $detail['price_per_uint'] ,
            'unit_id'            => $detail['unit_id'],
            'note'               => $detail['note'],
        ]);

        $document_header->update([
            "total_invoice"    => $sum_total,
            "invoice_discount" => $sum_discount,
            "net_invoice"      => $sum_net_invoice,
        ]);

        return $document_header;

    }

    public function documentRealEstateData($id)
    {
        $data = $this->model->relation()->find($id);
        return $data;
    }


    public function updateContractHeader($request,$id){
        if (generalCheckDateModelFinancialYear($request['date']) == "true"){
                $data = $this->model->find($id);
                $check_paid_amount = RpBreakDown::where('break_id',$data['id'])->where('document_id',$data->document_id)->whereHas('breakSettlements')->first();
                if($check_paid_amount)
                    return 'paid_befor';
                $data->update($request->only(['document_status_id','employee_id','total_invoice','net_invoice','invoice_discount','date']));
                $header_details = $data->documentHeaderDetails()->first();
                if($header_details){
                    $header_data = collect($request->header_details[0])->only(['unit_id','building_id','date_from','rent_days','total','date_to','discount','discount_per_day','price_per_uint'])->toArray();
                    $header_data['net_invoice'] = $request->net_invoice;
                    $header_data['invoice_discount'] = $request->invoice_discount;
                    $header_details->update($header_data);
                    RpBreakDown::where('break_id',$data['id'])->where('document_id',$data->document_id)->delete();
                    RpBreakDown::create([
                        'instalment_date' => $request->date,
                        'rate' => 1,
                        'repate' => 1,
                        'currency_id' => 1,
                        'document_id' => $data->document_id,
                        'customer_id' => $data->customer_id,
                        'break_id' => $data['id'],
                        'instalment_type_id' => 1,
                        'break_type' => 'documentHeader',
                        'debit' => ($data->document->attributes && $data->document->attributes['customer'] == 1)?$request->net_invoice:0,
                        'credit' => ($data->document->attributes && $data->document->attributes['customer'] == -1)?$request->net_invoice:0,
                        'total' =>$request->net_invoice,
                        'installment_statu_id' =>1,
                        'client_type_id' =>1,
                    ]);

                }

                return $data;
        }
        return 'false';


    }

    public function all_renew_contract_header($request)
    {
        $models = $this->model->filter($request)->data()->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if($request->document_id)
        {
            $models->where('document_id',$request->document_id);
        }

        if($request->building_id || $request->start_date)
        {

            $models->whereRelation('documentHeaderDetails',function($q) use($request){
                if($request->building_id){
                    $q->where('building_id',$request->building_id);

                }

                if($request->start_date)
                    $q->whereYear('date_to', ">=", $request->start_date)
                        ->whereYear('date_from', "<=", $request->start_date);

            });
        }

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function renew_contract($request){
        $contracts = $this->model->find($request->ids);
        foreach($contracts as $contract){
            $new_contract = $contract->replicate();
            $new_contract->save();
            $serials = generalSerial($new_contract);
            $new_contract->update([
                'date' => now()->format('Y-m-d'),
                'created_at' => now(),
                "serial_number" => $serials['serial_number'],
                "prefix" => $serials['prefix'],
            ]);

            $header_detail = $contract->documentHeaderDetails()->first();
            $new_header_detail = $header_detail->replicate();
            $new_header_detail->save();
            $new_header_detail->update([
                'document_header_id' => $new_contract->id,
                'date_from' => $request->date_from,
                'date_to' => $request->date_to,
                'created_at' => now(),
            ]);

            $break = RpBreakDown::where('break_id',$contract->id)->where('document_id',$contract->document_id)->first();
            $new_break = $break->replicate();
            $new_break->save();
            $new_break->update([
                'break_id' => $new_contract->id,
                'instalment_date' => now()->format('Y-m-d'),
                'created_at' => now(),
            ]);


        }

    }

}
