<?php

namespace Database\Seeders;

use App\Models\PaymentMethod;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('general_payment_methods')->delete();

        $payment_methods = [
            [
            'id' => 1,
            'name' => 'كاش',
            'name_e' => 'Cash',
            'is_default' => 1,

            ],
            [
            'id' => 2,
            'name' => 'فيزا',
            'name_e' => 'Visa',
            'is_default' => 1,
            ]

        ];

        foreach($payment_methods as $payment_method){
            PaymentMethod::create($payment_method);
        }

    }
}
