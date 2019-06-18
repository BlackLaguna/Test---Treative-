<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlightTouristTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flight_tourist', function (Blueprint $table) {
            $table->timestamps();
            $table->integer('tourist_id')->index('flight_tourist_tourist_id_foreign');
            $table->integer('flight_id')->index('flight_tourist_flight_id_foreign');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flight_tourist');
    }
}
