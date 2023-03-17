<?php

namespace App\Http\Controllers;

use App\Repositories\DispositivoRepository;
use Illuminate\Http\Request;

class DispositivoController extends Controller
{
    protected DispositivoRepository $DispositivoRepo;

    public function __construct(DispositivoRepository $DispositivoRepo)
    {
        $this->DispositivoRepo = $DispositivoRepo;
    }

    public function verDispositivo(Request $request){
        return $this->DispositivoRepo->verDispositivo($request);
    }
    public function listarDispositivos(Request $request){
        return $this->DispositivoRepo->listarDispositivos($request);
    }

}
