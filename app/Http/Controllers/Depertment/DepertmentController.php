<?php

namespace App\Http\Controllers\Depertment;

use App\Http\Controllers\Controller;
use App\Http\Requests\DepertmentRequest;
use App\Http\Requests\DocumentRequest;
use App\Http\Requests\FromAdminDocumentRequest;
use App\Http\Resources\Depertment\DepertmentResource;
use App\Http\Resources\Document\DocumentResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DepertmentController extends Controller
{
    public function __construct(private \App\Repositories\Depertment\DepertmentInterface $modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        return responseJson(200, 'success', new DepertmentResource($model));
    }


    public function all(Request $request)
    {
        $models = $this->modelInterface->all($request);
        return responseJson(200, 'success', DepertmentResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }


    public function create(DepertmentRequest $request)
    {
        $model = $this->modelInterface->create($request->validated());

        return responseJson(200, 'success', new DepertmentResource($model));
    }



    public function update(DepertmentRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $this->modelInterface->update($request->validated(), $id);
        $model->refresh();
        return responseJson(200, 'success', new DepertmentResource($model));
    }
    public function logs($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $logs = $this->modelInterface->logs($id);
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));
    }


    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        if ($model->hasChildren()) {
            return responseJson(400, __("this item has children and can't be deleted remove it's children first"));
        }
        $this->modelInterface->delete($id);
        return responseJson(200, 'success');
    }

    public function bulkDelete(Request $request)
    {

        foreach ($request->ids as $id) {
            $model = $this->modelInterface->find($id);
            $arr = [];
            if ($model->hasChildren()) {
                $arr[] = $id;
                continue;
            }
            $this->modelInterface->delete($id);
        }
        if (count($arr) > 0) {
            return responseJson(400, __('some items has relation cant delete'));
        }
        return responseJson(200, __('Done'));
    }

    public function processJsonData(Request $request)
    {
        $jsonData = $request->getContent();
        $data = json_decode($jsonData, true);

        $this->modelInterface->processJsonData($data);

        return responseJson(200, __('Done'));
    }


}
