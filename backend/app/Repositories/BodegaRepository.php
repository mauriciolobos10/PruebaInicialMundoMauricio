<?php

namespace App\Repositories;

use App\Models\Bodega;
use App\Models\Dispositivo;
use App\Models\Marca;
use App\Models\Modelo;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
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

    public function listarBodegas()
    {
        try {
            $bodega = Bodega::all();
            if(!$bodega){
                throw new Exception("No se encuentran bodega");
            }

        return response()->json(["bodegas" => $bodega], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    public function listarDatosBodega($request)
    {
        try {
            

            $resultados = DB::table('bodegas')
                ->where('bodegas.id', $request->id)
                ->join('dispositivos', 'bodegas.id', '=', 'dispositivos.bodega_id')
                ->join('modelos', 'dispositivos.modelo_id', '=', 'modelos.id')
                ->join('marcas', 'marcas.id', '=', 'modelos.marca_id')
                ->select('bodegas.id','dispositivos.id' ,'bodegas.bodega_nombre','dispositivos.dispositivo_nombre', 'modelos.modelo_nombre', 'marcas.marca_nombre')
                ->orderBy('dispositivos.id')
                ->get();

        return response()->json(["bodegas" => $resultados], Response::HTTP_OK);
        }catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }


}