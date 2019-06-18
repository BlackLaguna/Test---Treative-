<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Flight;
use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(Flight::class, function (Faker $faker) {

    $month = random_int(1, 12);
    $day = random_int(1, 28);
    $minutes = random_int(1, 60);
    $hours = random_int(1, 24);
    $dateTime = Carbon::create(2019,$month ,$day , $hours, $minutes, 1);;

    return [

        'departure_date_and_time' => $dateTime,
        'arrival_date_and_time' => Carbon::parse($dateTime)->addHour(random_int(1,12)),
        'number_of_seats' => random_int(15,20),
        'ticket_price' => random_int(150,500),

    ];
});
