<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\ModeloController;
use App\Http\Controllers\Dispositivo_bodegaController;
use App\Http\Controllers\BodegaController;
use App\Http\Controllers\DispositivoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/marca')->group(function () use ($router) {
    $router->get('/verMarca', [MarcaController::class, 'verMarca']);
});

Route::prefix('/modelo')->group(function () use ($router) {
    $router->get('/verModelo', [ModeloController::class, 'verModelo']);
});

Route::prefix('/bodega')->group(function () use ($router) {
    $router->get('/verBodega', [BodegaController::class, 'verBodega']);
});

Route::prefix('/dispositivo')->group(function () use ($router) {
    $router->get('/verDispositivo', [DispositivoController::class, 'verDispositivo']);
});

Route::prefix('/dispositivo_bodega')->group(function () use ($router) {
    $router->get('/verDispositivo_bodega', [Dispositivo_bodegaController::class, 'verDispositivo_bodega']);
});

