<?php

namespace App\Models\Front;

use Illuminate\Database\Eloquent\Model;

class DailyPrice extends Model
{
    //
    protected $table = 'daily_prices';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'status', 'room_id',  'price','start_date', 'end_date'];
}
