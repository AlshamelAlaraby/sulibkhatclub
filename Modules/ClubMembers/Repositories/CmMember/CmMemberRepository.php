<?php

namespace Modules\ClubMembers\Repositories\CmMember;

use App\Models\FinancialYear;
use Illuminate\Support\Facades\DB;
use Modules\ClubMembers\Entities\CmHistoryTransform;
use Modules\ClubMembers\Entities\CmMember;
use Modules\ClubMembers\Entities\CmMemberRequest;
use Modules\ClubMembers\Entities\CmTransaction;

class CmMemberRepository implements CmMemberInterface
{

    public function __construct(private CmMember $model, private CmHistoryTransform $modelCmHistoryTransform, CmMemberRequest $modelRequest, CmTransaction $modelTransaction)
    {
        $this->model = $model;
        $this->modelRequest = $modelRequest;
        $this->modelCmHistoryTransform = $modelCmHistoryTransform;
        $this->modelTransaction = $modelTransaction;

    }

    public function all($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->financial_status_id) {
            $models->where('financial_status_id', $request->financial_status_id);
        }
        if ($request->member_type_id) {
            $models->where('member_type_id', $request->member_type_id);
        }

        if ($request->member_id) {
            $models->where('id', $request->member_id);
        }
        if ($request->hasTransaction) {
            $models->whereHas('cmTransaction');
        }
        if ($request->sponsor_id) {
            $models->where('sponsor_id', $request->sponsor_id);
        }

        if ($request->member_status_id) {
            $models->where('member_status_id', $request->member_status_id);
        }


        if ($request->postal_report) {
            $models->Where('member_kind_id', $request->postal_report)->where('member_status_id', 1);
        }

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } elseif ($request->limet) {
            return ['data' => $models->take($request->limet)->get(), 'paginate' => false];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function allAcceptancePending($request)
    {

        $models = $this->model->filter($request)
            ->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC')
            ->where('acceptance', '0');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }

    }

    public function create($request)
    {

        return DB::transaction(function () use ($request) {
            if ($request['first_name']) {
                $full_name['first_name'] = $request['first_name'];
            }
            if ($request['second_name']) {
                $full_name['second_name'] = $request['second_name'];
            }
            if ($request['third_name']) {
                $full_name['third_name'] = $request['third_name'];
            }
            if ($request['last_name']) {
                $full_name['last_name'] = $request['last_name'];
            }
            if ($request['family_name']) {
                $full_name['family_name'] = $request['family_name'];
            }

            $array = implode(' ', $full_name);

            return $this->model->create(array_merge($request, ['full_name' => $array, 'member_type_id' => 4]));
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            if ($request['first_name']) {
                $full_name['first_name'] = $request['first_name'];
            }
            if ($request['second_name']) {
                $full_name['second_name'] = $request['second_name'];
            }
            if ($request['third_name']) {
                $full_name['third_name'] = $request['third_name'];
            }
            if ($request['last_name']) {
                $full_name['last_name'] = $request['last_name'];
            }
            if ($request['family_name']) {
                $full_name['family_name'] = $request['family_name'];
            }

            $array = implode(' ', $full_name);
            $this->model->where("id", $id)->update(array_merge($request, ['full_name' => $array]));
        });
        $model = $this->model->find($id);
        return $model;
        //
    }

    public function updateAcceptance($request, $id)
    {

        DB::transaction(function () use ($id, $request) {
            $increment_member_number = $this->model->max('membership_number');
            $new_member_number = $increment_member_number + 1;

            $increment_applying_number = $this->model->max('applying_number');
            $new_applying_number = $increment_applying_number + 1;

            $this->model->where("id", $id)->update(array_merge($request->all(),
                [
                    'acceptance' => 1,
                    'membership_number' => $new_member_number,
                    'applying_number' => $new_applying_number,
                    'financial_status_id' => 3,
                    'member_type_id' => 4,
                    'status_id' => 2,
                ]));
        });

        $model = $this->model->find($id);
        return $model;
    }

    public function updateDecline($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $this->modelRequest->where("id", $id)->update(array_merge($request->all(), ['acceptance' => 2, 'member_type_id' => 2]));
        });
        $model = $this->modelRequest->find($id);
        return $model;
    }

    public function updateSponsor($request, $sponsor_id)
    {
        // return now()->format('d-m-Y H:i:s') ;
        DB::transaction(function () use ($sponsor_id, $request) {
            $models = $this->model->where("sponsor_id", $sponsor_id)->get();
            foreach ($models as $model) {
                $this->modelCmHistoryTransform->create([
                    'sponser_id_from' => $model->sponsor_id,
                    'sponser_id_to' => $request->sponsor_id,
                    'member_id' => $model->id,
                    'date' => now(),
                ]);
                $model->update($request->all());
            }
        });

        $updatedModels = $this->model->where("sponsor_id", $request->sponsor_id)->where('updated_at', now()->format('y-m-d H:i:s'))->get();
        return $updatedModels;
    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    public function delete($id)
    {
        $model = $this->find($id);
        $model->delete();
    }

    public function allAcceptance($request)
    {

        $models = $this->model->filter($request)
            ->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC')
            ->where('acceptance', '1');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }

    }

    public function acceptMembers($request)
    {
        return DB::transaction(function () use ($request) {

            foreach ($request['accept-members'] as $accept_member) {
                $max_membership_number = $this->model->max('membership_number');
                $max = $max_membership_number + 1;

                $memberRequest = $this->modelRequest->where('id', $accept_member['id'])->first();
                if ($memberRequest) {
                    $membercreate = collect($memberRequest)->except(['id', 'deleted_at', 'created_at', 'updated_at', 'financial_status_id', 'member_type_id', 'status_id']);
                    $model = $this->model->create($membercreate->all());
                    $accept = collect($accept_member)->except(['id', 'financial_status_id', 'member_type_id', 'status_id']);
                    $model->update(array_merge($accept->all(),
                        [
                            'acceptance' => 1,
                            'membership_number' => $max,
                            'financial_status_id' => 3,
                            'member_type_id' => 4,
                            'status_id' => 2,
                        ]));
                    $transaction = $this->modelTransaction->where('member_request_id', $memberRequest->id)->first();
                    if ($transaction) {
                        $transaction->update([
                            'cm_member_id' => $model->id,
                            'member_request_id' => null,

                        ]);
                    }
                    $memberRequest->delete();
                }
            }
            return 200;

        });
    }

    public function reportCmMember($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->cm_permissions_id == 1) {
            $models->whereIn('auto_member_type_id', [1, 2, 3]);
        }
        if ($request->cm_permissions_id == 2) {
            $models->where('auto_member_type_id', 2);
        }

        if ($request->cm_permissions_id == 3) {
            $models->whereIn('auto_member_type_id', [2, 3]);
        }

        if ($request->cm_permissions_id == "0") {
            $models->where('auto_member_type_id', null);
        }

        if ($request->members_permissions_id) {
            $models->where('members_permissions_id', $request->members_permissions_id)->where('member_status_id',1);
        }

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }

    }

    public function updateLastTransactionDate()
    {
        $All_Members = $this->model->with('lastCmTransaction')->whereIn('member_type_id', [4, 5, 11, 12, 17, 19])->get();
        foreach ($All_Members as $member):

            $Last_date = \Carbon\Carbon::parse($member->lastCmTransaction['date'])->format('d-m-Y');
            $member->update(['last_transaction_date' => $Last_date]);
        endforeach;
        return 200;

    }

    public function updateCmMember()
    {
        /////type_permissions
        $permissions = DB::table('cm_type_permissions')->get();

        $financialyear = FinancialYear::where('is_active', 1)->first();

        if ($financialyear) {

            foreach ($permissions as $permission) {

                $running_member_all = $this->model->whereNotNull('last_transaction_date')->where('member_status_id', 1)->where('member_kind_id', $permission->cm_members_type_id)->get();

                foreach ($running_member_all as $index => $Member) {

                    if ($financialyear->start_date <= $Member->last_transaction_date && $financialyear->end_date >= $Member->last_transaction_date) {

                        $dbDate = \Carbon\Carbon::parse($Member->membership_date)->format('Y-m-d');
                        $diffYears = \Carbon\Carbon::now()->diffInYears($dbDate);

                        ///Second Condition
                        $Last_Member_transaction = $Member->last_transaction_date;
                        $Last_date = \Carbon\Carbon::parse($Last_Member_transaction)->format('m-d');

                        $dateformat = strftime("%F", strtotime(now()->format('Y') . "-" . $permission->allowed_subscription_date));
                        $permission_Day = \Carbon\Carbon::parse($dateformat)->format('m-d');

                        if ($diffYears >= $permission->membership_period && $permission_Day >= $Last_date) {
                            $Member->update([
                                'financial_status_id' => $permission->cm_financial_status_id,
                                'members_permissions_id' => $permission->cm_permissions_id,
                            ]);
                        }

                    } else {
                        $Member->update([
                            'financial_status_id' => 2,
                        ]);
                    }

                }

            }
        }

        return 200;
    }

    public function getSponsors($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->sponsor_id) {
            $models->where('sponsor_id', $request->sponsor_id);
        }

        if ($request->memberNumber) {
            $memberIds = $this->model->where('sponsor_id', $request->sponsor_id)->pluck('id');
        }
        // return $memberIds;

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true, 'memberIds' => $memberIds];
        } elseif ($request->limet) {
            return ['data' => $models->take($request->limet)->get(), 'paginate' => false];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function reportToMembers($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->financial_status_id) {
            $models->whereIn('financial_status_id', explode(",", $request->financial_status_id));
        }

        if ($request->member_type_id) {
            $models->whereIn('member_kind_id', explode(",", $request->member_type_id));
        }

        if ($request->status_id) {
            $models->whereIn('member_status_id', explode(",", $request->status_id));
        }

        if ($request->year_number) {
            $membership_year = $request->year - $request->year_number;
            $models->whereYear('membership_date', '<=', $membership_year);
        }

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

}
