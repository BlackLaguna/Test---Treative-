<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('tourist', 'TouristController@index');
Route::get('tourist/{id}', 'TouristController@show');
Route::get('tourist/{id}/flights', 'TouristController@showFlights');
Route::post('tourist/{id}/flights/{flight_id}', 'TouristController@addFlight');
Route::post('tourist', 'TouristController@store');
Route::delete('tourist/{id}', 'TouristController@delete');
Route::delete('tourist/{id}/flights/{flight_id}', 'TouristController@deleteFlight');


Route::get('flight', 'FlightController@index');
Route::get('flight/{id}', 'FlightController@show');
Route::get('flight/{id}/tourists', 'FlightController@showTourists');
Route::post('flight/{id}/tourists/{tourist_id}', 'FlightController@addTourist');
Route::post('flight', 'FlightController@store');
Route::put('flight/{id}', 'FlightController@update');
Route::delete('flight/{id}', 'FlightController@delete');
Route::delete('flight/{id}/tourists/{tourist_id}', 'FlightController@deleteTourist');
