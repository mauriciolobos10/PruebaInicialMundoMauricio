<?php

namespace App\Repositories;

use App\Models\Dispositivo_bodega;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class DispositivoBodegaRepository
{
    

    public function verDispositivoBodega($request)
    {
        try {
            $DispositivoBodega = Dispositivo_bodega::where('id', $request->id)->first();
            if(!$DispositivoBodega){
                throw new Exception("No se encuentra la relacion");
            }

        return response()->json(["Dispositivo_Bodega" => $DispositivoBodega], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

}