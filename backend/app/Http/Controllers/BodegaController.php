<?php

namespace App\Http\Controllers;

use App\Repositories\BodegaRepository;
use Illuminate\Http\Request;

class BodegaController extends Controller
{
    protected BodegaRepository $BodegaRepo;

    public function __construct(BodegaRepository $BodegaRepo)
    {
        $this->BodegaRepo = $BodegaRepo;
    }

    public function verBodega(Request $request){
        return $this->BodegaRepo->verBodega($request);
    }
    public function listarBodegas(){
        return $this->BodegaRepo->listarBodegas();
    }
    public function listarDatosBodega(Request $request){
        return $this->BodegaRepo->listarDatosBodega($request);
    }
    

}