<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    use HasFactory;

    protected $table = 'modelos';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        "modelo_nombre",
    ];

    public function marca()
    {
        return $this->belongsTo(Marca::class, "id");
    }
}
