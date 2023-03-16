<?php

namespace App\Repositories;

use App\Models\Dispositivo;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class DispositivoRepository
{
    

    public function verDispositivo($request)
    {
        try {
            $dispositivo = Dispositivo::where('id', $request->id)->first();
            if(!$dispositivo){
                throw new Exception("No se encuentra el dispositivo");
            }

        return response()->json(["dispositivo" => $dispositivo], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

}