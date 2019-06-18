<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Tourist;
use Faker\Generator as Faker;

$factory->define(Tourist::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'gender' => $faker->randomElement($array = array ('male', 'female')),
        'remarks' => $faker->text(100),
        'country' => $faker->country,
        'date_of_birth' => $faker->dateTime(),
    ];
});
