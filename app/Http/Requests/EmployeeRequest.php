<?php

namespace App\Http\Requests;

use App\Rules\MangerRule;
use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'nullable|string|max:255',
            'name_e' => 'nullable|string|max:255',
            'salesman_type_id' => "nullable|exists:general_salesmen_types,id",
            'department_id' => "nullable|exists:general_departments,id",
            'is_salesman' => "nullable|in:true,false",
            'customer_handel' => "nullable|in:non_customer,his_customer,all_customer",
            'plans' => "nullable|array",
            'plans.*' => "required|exists:general_salesmen_plans,id",
            'manager_id' => ["nullable", 'exists:general_employees,id', new MangerRule()],
            'job_id' => 'nullable|exists:hr_job_title,id',
            'branch_id' => 'nullable|exists:general_branches,id',
            'manage_others' => 'nullable|in:0,1',
        ];
    }

}
