<?php

namespace App\Repositories;

use App\Models\Bodega;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class BodegaRepository
{
    

    public function verBodega($request)
    {
        try {
            $bodega = Bodega::where('id', $request->id)->first();
            if(!$bodega){
                throw new Exception("No se encuentra la bodega");
            }

        return response()->json(["bodega" => $bodega], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

}