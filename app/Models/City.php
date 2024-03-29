<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\BoardsRent\Entities\Panel;
use Modules\RealEstate\Entities\RlstBuilding;
use Modules\RealEstate\Entities\RlstCustomer;

class City extends Model
{
    use HasFactory, LogTrait;
    protected $table = 'general_cities';

    protected $guarded = ['id'];

    public function scopeData($query)
    {
        return $query
            ->select('id',
                'name',
                'name_e',
                'is_active',
                'country_id', 'governorate_id')
            ->with('country:id,name,name_e', 'governorate:id,name,name_e');
    }

    public function governorate()
    {
        return $this->belongsTo(Governorate::class, 'governorate_id');
    }

    public function rlstOwners()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstOwner::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function avenues()
    {
        return $this->hasMany(Avenue::class, 'city_id');
    }
    public function customerBranches()
    {
        return $this->hasMany(\App\Models\CustomerBranch::class, 'city_id');
    }

    public function Panels()
    {
        return $this->hasMany(Panel::class, 'city_id');
    }

    public function customers()
    {
        return $this->hasMany(GeneralCustomer::class, 'city_id');
    }

    public function suppliers()
    {
        return $this->hasMany(Supplier::class, 'city_id');
    }

    public function buildings()
    {
        return $this->hasMany(RlstBuilding::class, 'city_id');
    }

    public function RlstCustomers()
    {
        return $this->hasMany(RlstCustomer::class, 'city_id');
    }


    public function hasChildren()
    {
        $relationsWithChildren = [];

        if ($this->RlstCustomers()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'RlstCustomers',
                'count' => $this->RlstCustomers()->count(),
                'ids' => $this->RlstCustomers()->pluck('name')->toArray(),
            ];
        }
        if ($this->buildings()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'buildings',
                'count' => $this->buildings()->count(),
                'ids' => $this->buildings()->pluck('name')->toArray(),
            ];
        }
        if ($this->rlstOwners()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'rlstOwners',
                'count' => $this->rlstOwners()->count(),
                'ids' => $this->rlstOwners()->pluck('name')->toArray(),
            ];
        }
        if ($this->avenues()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'avenues',
                'count' => $this->avenues()->count(),
                'ids' => $this->avenues()->pluck('name')->toArray(),
            ];
        }
        if ($this->suppliers()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'suppliers',
                'count' => $this->suppliers()->count(),
                'ids' => $this->suppliers()->pluck('name')->toArray(),
            ];
        }
        if ($this->customerBranches()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'customerBranches',
                'count' => $this->customerBranches()->count(),
                'ids' => $this->customerBranches()->pluck('name')->toArray(),
            ];
        }
        if ($this->Panels()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'Panels',
                'count' => $this->Panels()->count(),
                'ids' => $this->Panels()->pluck('name')->toArray(),
            ];
        }
        if ($this->customers()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'customers',
                'count' => $this->customers()->count(),
                'ids' => $this->customers()->pluck('name')->toArray(),
            ];
        }

        return $relationsWithChildren;
    }

    public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
    {
        $user = @auth()->user()->id ?: "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('City')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

}
