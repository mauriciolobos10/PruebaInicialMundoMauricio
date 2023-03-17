<?php

namespace App\Repositories;

use App\Models\Modelo;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class ModeloRepository
{
    

    public function verModelo($request)
    {
        try {
            $modelo = Modelo::where('id', $request->id)->first();
            if(!$modelo){
                throw new Exception("No se encuentra el modelo");
            }

        return response()->json(["modelo" => $modelo], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    public function listarModelos($request)
    {
        try {
            $modelo = Modelo::where('marca_id', $request->marca_id)->get();
            if(!$modelo){
                throw new Exception("No se encuentran modelos");
            }

        return response()->json(["modelos" => $modelo], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

}