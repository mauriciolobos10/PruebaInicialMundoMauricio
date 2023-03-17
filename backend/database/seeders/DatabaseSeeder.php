<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Bodega;
use App\Models\Dispositivo;
use App\Models\Dispositivo_bodega;
use App\Models\Marca;
use App\Models\Modelo;
use Illuminate\Bus\Dispatcher;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $modelo = Modelo::factory()->create();
        Bodega::factory()
        ->count(5)
        ->create();

        $marca = Marca::factory()
        ->count(3)
        ->create();


        $modelo = Modelo::factory()
        ->count(15)
        ->create();

        $dispositivo = Dispositivo::factory()
        ->count(25)
        ->create();


      

    }
}
