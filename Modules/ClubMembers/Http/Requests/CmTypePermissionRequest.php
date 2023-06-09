<?php

namespace Modules\ClubMembers\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CmTypePermissionRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cm_members_type_id' => 'required|exists:cm_members_types,id',
            'cm_permissions_id' => 'required',
            'cm_financial_status_id' => 'required|exists:cm_financial_status,id',
            'membership_period' => 'required|numeric',
            'allowed_subscription_date' => 'required',
        ];
    }

}
