<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $primaryKey = 'flight_id';
    public $timestamps = false;

    public function tourists()
    {
        return $this->belongsToMany('App\Tourist','flight_tourist','flight_id','tourist_id')->withTimestamps();
    }

    public static function create( $request)
    {
        $flight = new Flight;
        $flight->departure_date_and_time = $request['Departure_date_and_time'];
        $flight->arrival_date_and_time = $request['Arrival_date_and_time'];
        $flight->number_of_seats = $request['Number_of_seats'];
        $flight->ticket_price = $request['Ticket_price'];
        if($request['Departure_date_and_time'] >= $request['Arrival_date_and_time']) return response('',409);
        $flight->save();
        return response('',200);
    }


}
