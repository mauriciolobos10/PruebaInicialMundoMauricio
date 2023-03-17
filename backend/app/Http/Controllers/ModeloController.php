<?php

namespace App\Http\Controllers;

use App\Repositories\ModeloRepository;
use Illuminate\Http\Request;

class ModeloController extends Controller
{
    protected ModeloRepository $ModeloRepo;

    public function __construct(ModeloRepository $ModeloRepo)
    {
        $this->ModeloRepo = $ModeloRepo;
    }

    public function verModelo(Request $request){
        return $this->ModeloRepo->verModelo($request);
    }


    public function listarModelos(Request $request){
        return $this->ModeloRepo->listarModelos($request);
    }

}
