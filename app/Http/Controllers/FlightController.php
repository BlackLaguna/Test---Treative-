<?php

namespace App\Http\Controllers;

use App\Flight;
use App\Tourist;
use Illuminate\Http\Request;

class FlightController extends Controller
{

    public function index()
    {
        return Flight::all();
    }

    public function show($id)
    {
        return Flight::find($id);
    }

    public function store(Request $request)
    {
        return Flight::create($request->all());
    }

    public function showTourists($id)
    {
        $flights = Flight::findOrFail($id);
        $responce['tourists'] = $flights->tourists()->select('tourists.tourist_id','tourists.first_name','tourists.last_name')->get();
        $responce['noTourists'] = Tourist::whereDoesntHave('flights',function ($query) use ($id) { $query->where('flight_tourist.flight_id', '=', $id); })->get(['tourist_id','first_name','last_name']);
        return $responce;
    }

    public function addTourist($id,$tourist_id)
    {
        $flight = Flight::find($id);
        if($flight->number_of_seats == 0) return response(409)->setStatusCode(409);
        $tourist = Tourist::find($tourist_id);
        $flight->tourists()->attach($tourist);
        $flight->number_of_seats -= 1;
        $flight->save();
    }

    public function deleteTourist($id,$tourist_id)
    {
        $flight = Flight::find($id);
        $tourist = Tourist::find($tourist_id);
        $flight->tourists()->detach($tourist);
        $flight->number_of_seats += 1;
        $flight->save();
    }

    public function delete($id)
    {
        $flight = Flight::findOrFail($id);
        $flight->delete();

        return 204;
    }
}
