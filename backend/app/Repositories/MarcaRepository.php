<?php

namespace App\Repositories;

use App\Models\Marca;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class MarcaRepository
{
    

    public function verMarca($request)
    {
        try {
            $marca = Marca::where('id', $request->id)->first();
            if(!$marca){
                throw new Exception("No se encuentra la marca");
            }

        return response()->json(["marca" => $marca], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    public function listarMarcas()
    {
        try {
            $marca = Marca::all();
            if(!$marca){
                throw new Exception("No se encuentran las marcas");
            }

        return response()->json(["marcas" => $marca], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

}