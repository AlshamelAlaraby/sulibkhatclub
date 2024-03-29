<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\BoardsRent\Entities\SellMethod;
use Modules\BoardsRent\Entities\Task;
use Modules\HMS\Entities\HMSAppointment;
use Modules\HMS\Entities\HMSDoctor;
use Modules\HMS\Entities\HMSPatient;
use Modules\RecievablePayable\Entities\RpBreakDown;
use Modules\RecievablePayable\Entities\RpInstallmentPaymentType;

class DocumentHeader extends Model
{
    use HasFactory, SoftDeletes, LogTrait;

    protected $table = 'general_document_headers';

    protected $guarded = ['id'];

    public function scopeData($query)
    {
        return $query
            ->select('id', 'branch_id','doctor_id','net_invoice','from_doctor_id','patient_id','company_insurance_id','appointment_id','patient_insurance_number','total_company_insurance_amount'
            ,'total_patient_amount', 'date', 'prefix', 'employee_id', 'customer_id', 'company_id', 'document_id', 'related_document_id', 'serial_number','installment_payment_type_id','print_day','due_day')
            ->with(['customer:id,name,name_e', 'employee:id,name,name_e,customer_handel', 'branch:id,name,name_e' ,'documentHeaderDetails:id,document_header_id,date_from,date_to,category_booking','installmentPaymentType:id,name,name_e']);
    }

    public function scopeRelation($query)
    {
        return $query
            ->with(['customer' => function ($q) {
                $q->with('customer_sub_category:id,name,name_e');
            }, 'employee:id,name,name_e,customer_handel', 'branch:id,name,name_e', 'paymentMethod:id,name', 'documentHeaderDetails', 'documentNumber','document:id,name,name_e,document_detail_type','installmentPaymentType:id,name,name_e']);
    }

    public function scopeDetails($query)
    {
        return $query->with(['documentHeaderDetails' => function ($q) {
                $q->select('id,document_header_id,date_from,date_to,category_booking');
            }]);
    }
    public function scopePrint($query)
    {
        return $query
            ->select(
                'id',
                'branch_id',
                'date',
                'prefix',
                'employee_id',
                'customer_id',
                'company_id',
                'document_id',
                'related_document_id',
                'serial_number',
                'break_settlement_id',
                'customer_type',
                'attendans_num',
                'related_document_number',
                'invoice_discount'
                ,'installment_payment_type_id',
                'print_day'
                ,'due_day'
            )
            ->with([
                'documentNumber:id,date',
                'customer:id,name,name_e,address',
                'company:id,name,name_e',
                'employee:id,name,name_e,customer_handel',
                'branch:id,name,name_e',
                'installmentPaymentType:id,name,name_e',

                'documentHeaderDetails' => function($q){
                    $q->with([
                        'documentHeader:id,prefix,net_invoice',
                        'unit:id,name,name_e',
                        'item:id,name,name_e'
                    ]);
                },
                'breakSettlement' => function($q){
                    $q->with([
                        'breakVoucherHeaders' => function($q){
                            $q->with([
                                'document','paymentMethod'
                            ]);
                        },
                    ]);
                }
            ]);
    }



    public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
    {
        $user = @auth()->user()->id ?: "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Document Header')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function documentStatus()
    {
        return $this->belongsTo(DocumentStatuse::class, 'document_status_id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }

    public function relatedDocument()
    {
        return $this->belongsTo(Document::class, 'related_document_id');
    }

    public function document()
    {
        return $this->belongsTo(Document::class, 'document_id');
    }

    public function installmentPaymentType()
    {
        return $this->belongsTo(RpInstallmentPaymentType::class, 'installment_payment_type_id');
    }

    public function sellMethod()
    {
        return $this->belongsTo(SellMethod::class, 'sell_method_id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    public function customer()
    {
        return $this->belongsTo(GeneralCustomer::class, 'customer_id');
    }

    public function task()
    {
        return $this->belongsTo(\App\Models\Task::class, 'task_id');
    }
    public function externalSalesmen()
    {
        return $this->belongsTo(ExternalSalesmen::class, 'external_salesmen_id');
    }

    public function serial()
    {
        return $this->belongsTo(Serial::class, 'serial_id');
    }

    public function documentNumber()
    {
        return $this->belongsTo(DocumentHeader::class, 'related_document_number');
    }

    public function documentHeaderDetails()
    {
        return $this->hasMany(DocumentHeaderDetail::class, 'document_header_id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }

    public function company()
    {
        return $this->belongsTo(GeneralCustomer::class, 'company_id');
    }

    public function breakSettlement()
    {
        return $this->belongsTo(BreakSettlement::class, 'break_settlement_id');

    }
    public function doctor()
    {
        return $this->belongsTo(HMSDoctor::class, 'doctor_id');

    }
    public function from_doctor()
    {
        return $this->belongsTo(HMSDoctor::class, 'from_doctor_id');

    }
    public function company_insurance()
    {
        return $this->belongsTo(InsuranceCompany::class, 'company_insurance_id');

    }
    public function patient()
    {
        return $this->belongsTo(HMSPatient::class, 'patient_id');

    }
    public function appointment()
    {
        return $this->belongsTo(HMSAppointment::class, 'appointment_id');

    }

    public function attendants()
    {
        return $this->belongstoMany(Attendant::class, 'general_attendant_document_headers', 'document_header_id', 'attendant_id');
    }
    public function attendantsDocument()
    {
        return $this->belongstoMany(Attendant::class, 'general_attendant_document_headers', 'document_header_id', 'attendant_id');
    }

    public function rp_break_downs()
    {
        return $this->hasMany(RpBreakDown::class, 'break_id');
    }


    public function hasChildren()
    {
        $relationsWithChildren = [];

        if ($this->documentHeaderDetails()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'documentHeaderDetails',
                'count' => $this->documentHeaderDetails()->count(),
                'ids' => $this->documentHeaderDetails()->pluck('id')->toArray(),
            ];
        }
        if ($this->rp_break_downs()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'rp_break_downs',
                'count' => $this->rp_break_downs()->count(),
                'ids' => $this->rp_break_downs()->pluck('rate')->toArray(),
            ];
        }


        return $relationsWithChildren;
    }


}
