<?php

namespace Database\Factories;

use App\Models\Bodega;
use App\Models\Modelo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dispositivo>
 */
class DispositivoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'dispositivo_nombre' => $this->faker->word(),
            

            'modelo_id' => Modelo::inRandomOrder()
            ->limit(1)
            ->pluck('id')->first(),


            'bodega_id' => Bodega::inRandomOrder()
            ->limit(1)
            ->pluck('id')->first(),
        ];
    }
}
