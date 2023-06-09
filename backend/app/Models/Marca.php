<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;

    protected $table = 'marcas';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        "marca_nombre",
    ];

    public function modelo() 
    {
        return $this->hasMany(Modelo::class);
    }

}
