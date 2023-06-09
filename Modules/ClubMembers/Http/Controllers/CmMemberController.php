<?php

namespace Modules\ClubMembers\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ClubMembers\Entities\CmMember;
use Modules\ClubMembers\Http\Requests\CmAcceptMembersRequest;
use Modules\ClubMembers\Http\Requests\CmMemberAcceptRequest;
use Modules\ClubMembers\Http\Requests\CmMemberDeclineRequest;
use Modules\ClubMembers\Http\Requests\CmMemberRequest;
use Modules\ClubMembers\Http\Requests\CmUpdateAcceptedMemberRequest;
use Modules\ClubMembers\Repositories\CmMember\CmMemberInterface;
use Modules\ClubMembers\Transformers\CmMemberResource;
use Illuminate\Support\Facades\DB;


class CmMemberController extends Controller
{

    public function __construct(private CmMemberInterface $modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function all(Request $request)
    {
        $models = $this->modelInterface->all($request);

        return responseJson(200, 'success', CmMemberResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function find($id)
    {

        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        return responseJson(200, 'success', new CmMemberResource($model));
    }

    public function allAcceptancePending(Request $request)
    {
        $models = $this->modelInterface->allAcceptancePending($request);

        return responseJson(200, 'success', CmMemberResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(CmMemberRequest $request)
    {
        $model = $this->modelInterface->create($request->validated());
        return responseJson(200, 'success', new CmMemberResource($model));
    }

    public function update(CmMemberRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->update($request->validated(), $id);

        return responseJson(200, 'success', new CmMemberResource($model));
    }

    public function acceptMember(CmMemberAcceptRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);

        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->updateAcceptance($request, $id);

        return responseJson(200, 'success', new CmMemberResource($model));
    }


    public function declineMember(CmMemberDeclineRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->updateDecline($request, $id);

        return responseJson(200, 'success', new CmMemberResource($model));
    }

    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        if ($model->haveChildren) {
            return responseJson(400, __('message.parent have children'));
        }
        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }

    public function logs($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $logs = $this->modelInterface->logs($id);
        return responseJson(200, 'success', $logs);
    }

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $model = $this->modelInterface->find($id);
            $arr = [];
            if ($model->have_children) {
                $arr[] = $id;
                continue;
            }
            $this->modelInterface->delete($id);
        }
        if (count($arr) > 0) {
            return responseJson(400, __('some items has relation cant delete'));
        }
        return responseJson(200, __('Done'));
    }

    public function updateSponsor(Request $request, $sponsor_id)
    {
        // return now()->format('d-m-Y H:i:s');

        $model = CmMember::where("sponsor_id", $sponsor_id)->get();

        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->updateSponsor($request, $sponsor_id);

        return responseJson(200, 'success', CmMemberResource::collection($model));

    }

    public function allAcceptance(Request $request)
    {
        $models = $this->modelInterface->allAcceptance($request);

        return responseJson(200, 'success', CmMemberResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function acceptMembers(CmAcceptMembersRequest $request)
    {
        $this->modelInterface->acceptMembers($request->validated());

        return responseJson(200, 'updated successfully');

    }


    public function updateAcceptedMembers(CmUpdateAcceptedMemberRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->update($request->validated(), $id);

        return responseJson(200, 'Updated Successfully', new CmMemberResource($model));
    }



    public function TestTransfer()
    {
        $members = CmMember::where('full_name',1)->count();
//        $members = CmMember::find(1);
        return $members;
    }
    public function dataMemberFildFullNameTable()
    {
        ini_set('max_execution_time', 3600); // 3600 seconds = 60 minutes
        set_time_limit(3600);
        ini_set('memory_limit', -1);

        $members =  CmMember::get()->chunk(1000);
        foreach ($members as $index => $member):
            foreach ($member as   $full_name ):
                $names = "$full_name->first_name $full_name->second_name $full_name->third_name $full_name->last_name $full_name->family_name";
                $full_name->update(['full_name'=>$names]);

            endforeach;
        endforeach;
        return "Successfully Data Full Name In Table CmMember  ";

    }
    public function dataMemberTable()
    {


        ini_set('max_execution_time', 3600); // 3600 seconds = 60 minutes
        set_time_limit(3600);
        ini_set('memory_limit', -1);

//
        $ttt = json_decode(file_get_contents(base_path('Modules/ClubMembers/Resources/assets/db/json_Members.json')));
        foreach ($ttt as $member):

            $full_name = ($member->FNAME ?? '') . ' ' .
                ($member->SNAME ?? '') . ' ' .
                ($member->TNAME ?? '') . ' ' .
                ($member->FORNAME ?? '') . ' ' .
                ($member->ZFAM_NAME ?? '') ;


            CmMember::create([
                "applying_number" => $member->ORDER_NO,
                "membership_number" => $member->MemberNo,
                "home_address" => $member->HouseAddress,
                "membership_date" => $member->ORDER_DATE,
                "nationality_class" => $member->NationalNo,
                "national_id" => $member->Cvlid,
                "first_name" => $member->FNAME,
                "second_name" => $member->SNAME,
                "third_name" => $member->TNAME,
                "last_name" => (string) $member->FORNAME,
                "family_name" => $member->ZFAM_NAME,
                "birth_date" => $member->BIRTH_DATE,
                "acceptance" => $member->ACCEPTED,
                "degree" => $member->StudyDegree,
                "job" => $member->employee,
                "work_phone" => $member->JobTel,
                "work_address" => $member->JobAddress,
                "home_phone" => $member->HouseTel,
                "status_id" => $member->ZSTATUS,
                "session_date" => $member->MeetingDate,
                "session_number" => $member->MeetingNumber,
                "full_name" =>$full_name,
             ]);

        endforeach;

        return "Successfully Data F Table CmMember  ";


    }



}
