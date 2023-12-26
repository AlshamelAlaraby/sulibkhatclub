<?php

namespace Modules\CarRent\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarBodyTypeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:50|string|unique:car_body_types,name' . ($this->method() == 'PUT' ? ',' . $this->id : ''),
            'name_e' => 'required|max:50|string|unique:car_body_types,name_e' . ($this->method() == 'PUT' ? ',' . $this->id : ''),
            'company_id' => 'nullable',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
