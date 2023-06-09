<?php

namespace App\Repositories\Document;

use Illuminate\Support\Facades\DB;

class DocumentIRepository implements DocumentInterface
{
    public function __construct(private \App\Models\Document $model)
    {
        $this->model = $model;
    }

    public function all($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->document) {
            $models->where('id', '!=', 1);
        }

        if ($request->employee_id){
            $models->whereHas('employees',function ($q) use ($request){
                $q->where('general_documents_approve_personal.employee_id',$request->employee_id);
            })->where('need_approve',0);

        }
        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }

    }

    public function find($id)
    {
        $data = $this->model->find($id);
        return $data;
    }
    public function findWhereIsAdmin($id)
    {
        $data = $this->model->where('is_admin', 1)->find($id);
        return $data;
    }

    public function create($request)
    {
        DB::transaction(function () use ($request) {
            $model = $this->model->create($request);
            if ($request['document_relateds']){
                $model->documentRelateds()->sync($request['document_relateds']);
            }
            if ($request['employees']){
                $model->employees()->sync($request['employees']);
            }

        });
    }

    public function createFromAdmin($request)
    {
        $this->model->
            where([
            ['company_id', $request["documents"][0]['company_id']],
            ['is_admin', 1],
        ])->delete();
        foreach ($request['documents'] as $document):
            $nullIsAdmin = $this->model->find($document['id']);
            if ($nullIsAdmin) {
                $nullIsAdmin->delete();
            }
            $model = $this->model->create(array_merge($document, ['is_admin' => 1]));
            $model->documentRelateds()->sync($document['document_relateds']);
        endforeach;
    }

    public function update($request, $id)
    {
        $data = $this->model->find($id);
        $data->update($request);
        if ( isset($request['document_relateds'] )){
            $data->documentRelateds()->sync($request['document_relateds']);
        }
        if ( isset($request['employees'] )){
            $data->employees()->sync($request['employees']);
        }
        return $data;
    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    public function delete($id)
    {
        $model = $this->model->find($id);
        $model->delete();
    }
}
