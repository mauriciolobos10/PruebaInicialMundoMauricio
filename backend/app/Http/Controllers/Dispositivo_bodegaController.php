<?php

namespace App\Http\Controllers;

use App\Repositories\DispositivoBodegaRepository;
use Illuminate\Http\Request;

class Dispositivo_bodegaController extends Controller
{
    protected DispositivoBodegaRepository $Dispositivo_bodegaRepo;

    public function __construct(DispositivoBodegaRepository $Dispositivo_bodegaRepo)
    {
        $this->Dispositivo_bodegaRepo = $Dispositivo_bodegaRepo;
    }

    public function verDispositivo_bodega(Request $request){
        return $this->Dispositivo_bodegaRepo->verDispositivoBodega($request);
    }

}
