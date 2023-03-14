<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispositivo_bodega extends Model
{
    use HasFactory;

    protected $table = 'dispositivo_bodegas';
    protected $primaryKey = 'id';
    public $timestamps = true;

    // protected $fillable = [
    //     "bodega_nombre",
    // ];
    public function dispositivo(){
        return $this->belongsTo(Dispositivo::class, "dispositivo_id");
    }

    public function bodega(){
        return $this->belongsTo(Bodega::class, "bodega_id");
    }
}
