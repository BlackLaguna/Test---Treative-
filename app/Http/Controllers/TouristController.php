<?php

namespace App\Http\Controllers;

use App\Flight;
use App\Tourist;
use Illuminate\Http\Request;

class TouristController extends Controller
{

    public function index()
    {
        return Tourist::all();
    }

    public function show($id)
    {
        return Tourist::find($id);
    }

    public function store(Request $request)
    {
        return Tourist::create($request->all());
    }

    public function showFlights($id)
    {
        $tourist = Tourist::findOrFail($id);
        $responce['flights'] = $tourist->flights;
        $responce['noFlights'] = Flight::whereDoesntHave('tourists',function ($query) use ($id){ $query->where('flight_tourist.tourist_id', '=', $id);})->get();
        return $responce;
    }

    public function addFlight($tourist_id,$flight_id)
    {
        $flight = Flight::find($flight_id);
        if($flight->number_of_seats == 0) return response(409)->setStatusCode(409);
        $tourist = Tourist::find($tourist_id);
        $tourist->flights()->attach($flight);
        $flight->number_of_seats -= 1;
        $flight->save();
    }

    public function deleteFlight($id,$flight_id)
    {
        $flight = Flight::find($flight_id);
        $tourist = Tourist::find($id);
        $tourist->flights()->detach($flight);
        $flight->number_of_seats += 1;
        $flight->save();
    }

    public function delete($id)
    {
        $tourist = Tourist::findOrFail($id);
        $tourist->delete();

        return 200;
    }
}
