<?php

namespace Database\Factories;

use App\Models\Bodega;
use App\Models\Dispositivo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dispositivo_bodega>
 */
class Dispositivo_bodegaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'dispositivo_id' => Dispositivo::inRandomOrder()
            ->limit(1)
            ->pluck('id')->first(),

            'bodega_id' => Bodega::inRandomOrder()
            ->limit(1)
            ->pluck('id')->first(),
            // 'bodega_id' => Bodega::factory(),
        ];
    }
}
