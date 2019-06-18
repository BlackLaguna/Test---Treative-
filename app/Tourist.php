<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Tourist extends Model
{
    protected $primaryKey = 'tourist_id';
    public $timestamps = false;

    public function flights()
    {
        return $this->belongsToMany('App\Flight','flight_tourist','tourist_id','flight_id')->withTimestamps();
    }

    public static function create( $request)
    {
        $tourist = new Tourist;
        $tourist->first_name = $request['First_name'];
        $tourist->last_name = $request['Last_name'];
        $tourist->gender = $request['Gender'];
        $tourist->country = $request['Country'];
        $tourist->remarks = $request['Remarks'];
        $tourist->date_of_birth = $request['Date_of_birth'];
        $tourist->save();
        return response('',200);
    }
}
