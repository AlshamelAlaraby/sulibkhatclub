<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
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
            "execution_date" => "nullable|date",
            "execution_end_date" => "nullable|date",
            "notification_date" => "nullable|date",
            "execution_duration" => "nullable|string",
            "contact_phone" => "nullable|string",
            "contact_person" => "nullable|string",
            "note" => "nullable|string",
            "task_title"    => "nullable|string",
            "department_id" => "nullable|exists:general_departments,id",
            "employee_id" => "nullable|exists:general_employees,id",
            "customer_id" => "nullable|exists:general_customers,id",
            "department_task_id" => "nullable|exists:general_depertment_tasks,id",
            "status_id" => "nullable|exists:general_statuses,id",
            "owners.*" => "nullable",
            "supervisors.*" => "nullable",
            "notifications.*" => "nullable",
            "media" => "nullable|array",
            "media.*" => ["nullable", "exists:media,id", new \App\Rules\MediaRule()],
        ];
    }
}
