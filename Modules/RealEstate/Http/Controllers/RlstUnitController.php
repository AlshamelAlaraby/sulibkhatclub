<?php

namespace Modules\RealEstate\Http\Controllers;

use App\Http\Requests\AllRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Entities\RlstUnit;
use Modules\RealEstate\Entities\RlstWallet;
use Modules\RealEstate\Http\Requests\RlstUnitEditRequest;
use Modules\RealEstate\Http\Requests\RlstUnitFilterRequest;
use Modules\RealEstate\Http\Requests\RlstUnitRequest;
use Modules\RealEstate\Transformers\RlstUnitResource;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Modules\RealEstate\Transformers\RlstUnitFilterResource;


class RlstUnitController extends Controller
{

    public function __construct(private RlstUnit $model,  RlstWallet $modelWallet)
    {
        $this->model = $model;
        $this->modelWallet = $modelWallet;
    }

    public function generalFilter(RlstUnitFilterRequest $request)
    {

        $models = $this->model->filter($request)->generalfilter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');



        if ($request->per_page) {
            $models = ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            $models = ['data' => $models->get(), 'paginate' => false];
        }
        // return $models;
        return responseJson(200, 'success', RlstUnitFilterResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);

    }


    public function find($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        return responseJson(200, 'success', new RlstUnitResource($model));
    }

    public function all(AllRequest $request)
    {
        $models = $this->model->when($request->building_id,function($q) use($request){
            $q->where("building_id", $request->building_id);
        })
        ->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->unit_status_id) {
            $models->where('unit_status_id', $request->unit_status_id);
        }


        if ($request->per_page) {
            $models = ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            $models = ['data' => $models->get(), 'paginate' => false];
        }

        return responseJson(200, 'success', RlstUnitResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(RlstUnitRequest $request)
    {
        $model = $this->model->create($request->validated());
        $model->refresh();

        if ($request->video_link) {
            $model->video()->create([
                'link' => $request->video_link,
            ]);
        }
        if ($request->media) {
            foreach ($request->media as $media) {
                $this->media::where('id', $media)->update([
                    'model_id' => $model->id,
                    'model_type' => get_class($this->model),
                ]);
            }
        }
        return responseJson(200, 'created', new RlstUnitResource($model));

    }


    public function update($id, RlstUnitEditRequest $request)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $model->update($request->all());
        $model->refresh();
        if ($request->video_link) {
            $model->video()->delete();
            $model->video()->create([
                'link' => $request->video_link,
            ]);
        }
        if ($request->media && !$request->old_media) { // if there is new media and no old media
            $model->clearMediaCollection('media');
            foreach ($request->media as $media) {
                uploadImage($media, [
                    'model_id' => $model->id,
                    'model_type' => get_class($this->model),
                ]);
            }
        }

        if ($request->old_media && !$request->media) { // if there is old media and no new media
            $model->media->whereNotIn('id', $request->old_media)->each(function (Media $media) {
                $media->delete();
            });
        }

        if ($request->old_media && $request->media) { // if there is old media and new media
            $model->media->whereNotIn('id', $request->old_media)->each(function (Media $media) {
                $media->delete();
            });
            foreach ($request->media as $image) {
                uploadImage($image, [
                    'model_id' => $model->id,
                    'model_type' => get_class($this->model),
                ]);
            }
        }

        if (!$request->old_media && !$request->media) { // if this is no old media and new media
            $model->clearMediaCollection('media');
        }

        return responseJson(200, 'updated', new RlstUnitResource($model));
    }




    public function logs($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $logs = $model->activities()->orderBy('created_at', 'DESC')->get();
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));
    }

    public function delete($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $model->delete();
        return responseJson(200, 'deleted');
    }

    public function bulkDelete()
    {
        $ids = request()->ids;
        if (!$ids) {
            return responseJson(400, 'ids is required');
        }
        $models = $this->model->whereIn('id', $ids)->get();
        if ($models->count() != count($ids)) {
            return responseJson(404, 'not found');
        }
        $models->each(function ($model) {
            $model->delete();
        });
        return responseJson(200, 'deleted');
    }

    public function getOwnerByWalletId($wallet_id)
    {
        $owner = $this->modelWallet->with('owners')->find($wallet_id);
        // $owner = $wallet->owners;
        return responseJson(200, 'success', $owner );
    }


    public function getBuildingByWalletId($wallet_id)
    {
        $building = $this->modelWallet->with('buildings')->find($wallet_id);
        // $owner = $wallet->owners;
        return responseJson(200, 'success', $building );
    }



}
