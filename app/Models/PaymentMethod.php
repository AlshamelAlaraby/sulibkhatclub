<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class PaymentMethod extends Model
{
    use HasFactory, SoftDeletes, LogTrait;

    protected $table = 'general_payment_methods';

    protected $fillable = [
        'name',
        'name_e',
        'is_default',
    ];

    protected $casts = [
        'is_default' => '\App\Enums\IsDefault',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Payment Method')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
