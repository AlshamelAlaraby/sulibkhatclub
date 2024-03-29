<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;

class DepertmentTask extends Model
{
    use HasFactory, LogTrait;

    protected $table = 'general_depertment_tasks';

    protected $guarded = ['id'];

    public function scopeData($query)
    {
        return $query
            ->select('id','name','name_e','description','description_e','estimate_task_duration','department_id')
            ->with('depertment:id,name,name_e');
    }

    public function depertment()
    {
        return $this->belongsTo(Depertment::class, 'department_id');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'department_task_id');
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('DepertmentTask')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }


    public function getEstimateTaskDurationAttribute($value)
    {
        return json_decode($value);
    }

    public function setEstimateTaskDurationAttribute($value)
    {
        $this->attributes['estimate_task_duration'] = json_encode($value);
    }

    public function hasChildren()
    {
        $relationsWithChildren = [];

        if ($this->tasks()->count() > 0) {
            $relationsWithChildren[] = [
                'relation' => 'tasks',
                'count' => $this->tasks()->count(),
                'ids' => $this->tasks()->pluck('contact_person')->toArray(),
            ];
        }


        return $relationsWithChildren;
    }
}
