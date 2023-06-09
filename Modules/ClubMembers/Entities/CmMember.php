<?php

namespace Modules\ClubMembers\Entities;

use App\Traits\LogTrait;
use Spatie\Activitylog\LogOptions;
use Illuminate\Database\Eloquent\Model;
use Modules\ClubMembers\Entities\Status;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CmMember extends Model
{
    use HasFactory, LogTrait, SoftDeletes;

    protected $guarded = [];
    protected $table = 'cm_members';

    protected $casts = [
        'is_accept' => 'App\Enums\IsAccept',
        'is_sponsor' => 'App\Enums\IsSponsor',
    ];

    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }

    public function sponsors()
    {
        return $this->belongsTo(\Modules\ClubMembers\Entities\CmSponser::class, 'sponsor_id');
    }

    public function memberType()
    {
        return $this->belongsTo(CmMemberType::class, 'member_type_id');
    }

    public function financialStatus()
    {
        return $this->belongsTo(CmFinancialStatus::class, 'financial_status_id');
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Sponser')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }


    public function scopeFilter($query, $request)
    {
        return $query->where(function ($q) use ($request) {

            if ($request->has('date')) {
                $q->whereDate('date', $request->date);
            }

            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    if (strpos($column, ".") > 0) {
                        $column = explode(".", $column);
                        $q->orWhereRelation($column[0], $column[1], 'like', '%' . $request->search . '%');
                        $q->orWhereHas($column[0], function ($q) use ($column, $request) {
                            $q->where($column[1], 'like', '%' . $request->search . '%');
                        });
                    } else {
                        $q->orWhere($column, 'like', '%' . $request->search . '%');
                    }
                }
            }

            if ($request->last_days) {
                $q->whereDate('membership_date', '>=', now()->subDays($request->last_days));
            }

            if ($request->has('cm_permission_id') && is_array($request->cm_permission_id)) {
                $q->whereHas('memberType', function ($q) use ($request) {
                    $q->whereHas('memberPermissions', function ($q) use ($request) {
                        foreach ($request->cm_permission_id as $permission_id) {
                            $q->whereJsonContains('cm_permissions_id', $permission_id);
                        }
                    });
                });
            }

            if ($request->key && $request->value) {
                $q->where($request->key, $request->value);
            }
        });
    }
}
