<?php

namespace Modules\RealEstate\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\RealEstate\Entities\RlstBuildingWallet;
use Modules\RealEstate\Entities\RlstOwner;
use Modules\RealEstate\Entities\RlstWallet;
use Modules\RealEstate\Entities\RlstWalletOwner;

class RlstUnitFilterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {

        // $unitDetails = RlstUnit::where('building_id', $this->building_id)->first();
        $buildingWallet = RlstBuildingWallet::where('building_id', $this->building_id)->first();
        $ownerId = RlstWalletOwner::where('wallet_id', $buildingWallet->wallet_id)->first();

        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'name_e' => $this->name_e,
            'description' => $this->description,
            'description_e' => $this->description_e,
            'unit_ty' => $this->unit_ty,
            'unit_area' => $this->unit_area,
            'building_id' => $this->building_id,
            'unit_status_id' => $this->unit_status_id,
            'rooms' => $this->rooms,
            "unit_net_area" => $this->unit_net_area,
            'path' => $this->path,
            'view' => $this->view,
            'floor' => $this->floor,
            'finishing' => $this->finishing,
            'properties' => $this->properties,
            'module' => $this->module,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            "building" => new RlstBuildingResource($this->building),
            "unit_status" => new RlstUnitStatusResource($this->unitStatus),
            'owner' => new RlstOwnerResource(RlstOwner::find($ownerId->owner_id)),
            'wallet' => new RlstWalletResource(RlstWallet::find($ownerId->wallet_id)),

        ];
    }
}
