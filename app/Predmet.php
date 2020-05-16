<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Predmet extends Model
{
    protected $table = 'predmeti';
    
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function post(){
        return $this->hasMany('App\Post');
    }
}
