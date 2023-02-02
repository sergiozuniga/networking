<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Videocall extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'user_id', 'invited_id'
    ];

}
