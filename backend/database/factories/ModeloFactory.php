<?php

namespace Database\Factories;

use App\Models\Marca;
use App\Models\Modelo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Modelo>
 */
class ModeloFactory extends Factory
{
    protected $model = Modelo::class;
    
    
    public function definition()
    {
        return [

            // 'marca_id' => Marca::factory(),
            
            // 'marca_id' => Marca::inRandomOrder()
            // ->limit(1)
            // ->get('id'),
            'marca_id' => Marca::inRandomOrder()
            ->limit(1)
            ->pluck('id')->first(),

            'modelo_nombre' => $this->faker->word(),
            // dd(Marca::inRandomOrder()->take(1)->get())
            // 'marca_id' => Marca::inRandomOrder()->take(1)->get(),
        ];
    }
}
