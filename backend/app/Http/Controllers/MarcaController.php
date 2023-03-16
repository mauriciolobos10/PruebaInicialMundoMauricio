<?php

namespace App\Http\Controllers;

use App\Repositories\MarcaRepository;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    protected MarcaRepository $marcaRepo;

    public function __construct(MarcaRepository $marcaRepo)
    {
        $this->marcaRepo = $marcaRepo;
    }

    public function verMarca(Request $request){
        return $this->marcaRepo->verMarca($request);
    }

}
