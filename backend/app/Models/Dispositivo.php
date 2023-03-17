<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispositivo extends Model
{
    use HasFactory;

    protected $table = 'dispositivos';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        "dispositivo_nombre",
    ];

    public function modelo(){
        return $this->belongsTo(Modelo::class, "modelo_id");
    }


    public function bodega(){
        return $this->belongsTo(Bodega::class, "bodega_id");
    }
}
