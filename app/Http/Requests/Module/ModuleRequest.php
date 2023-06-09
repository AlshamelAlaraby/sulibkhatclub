<?php

namespace App\Http\Requests\Module;

use Illuminate\Foundation\Http\FormRequest;

class ModuleRequest extends FormRequest
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
        if ($this->method() == 'PUT'):
            return [
                'name' => 'required|string|max:255|unique:modules,name,' . $this->id,
                'name_e' => 'required|string|max:255|unique:modules,name_e,' . $this->id,
                'parent_id' => ["nullable", new \App\Rules\NotInChildrenRule(), "exists:modules,id", "not_in:" . $id],
                "is_active" => "nullable|in:active,inactive",
            ];
        else:
            return [
                'name' => 'required|string|max:255|unique:modules,name',
                'name_e' => 'required|string|max:255|unique:modules,name_e',
                'parent_id' => "nullable|exists:modules,id",
                "is_active" => "nullable|in:active,inactive",
            ];
        endif;
    }

    public function messages()
    {
        return [
            'name.required' => __('message.field is required'),
            'name.string' => __('message.field must be string'),
            'name.max' => __('message.field must be less than 255 character'),
            'name.unique' => __('message.field must be unique'),
            'name_e.required' => __('message.field is required'),
            'name_e.string' => __('message.field must be string'),
            'name_e.max' => __('message.field must be less than 255 character'),
            'name_e.unique' => __('message.field must be unique'),
            'parent_id.exists' => __('message.field must be exists'),

        ];
    }

}
