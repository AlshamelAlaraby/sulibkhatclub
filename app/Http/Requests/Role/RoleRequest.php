<?php

namespace App\Http\Requests\Role;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class RoleRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'name' => 'sometimes|string|max:255',
            'name_e' => 'sometimes|string|max:255',
            'roletype_id'=>['nullable'],
            "company_id"=>"nullable"
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

    /*
    * custom failedValidation response
    */
    public function failedValidation ( Validator $validator )
    {
        throw new HttpResponseException(response()->json(
            [
                'status'    => 422,

                'success'   => false,

                'message'   => __ ('validation errors'),

                'data'      => $validator->errors()
            ],
            422
        ));
    }

    /*
     * translate failedValidation messages
     */
    public function messages ()
    {
        return [
            'required'=>__ ('required'),
            'unique'=>__ ('exists')
        ];
    }
}
