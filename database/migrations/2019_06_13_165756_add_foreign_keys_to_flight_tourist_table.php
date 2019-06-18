<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeysToFlightTouristTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('flight_tourist', function (Blueprint $table) {
            $table->foreign('flight_id')->references('flight_id')->on('flights')->onDelete('CASCADE');
            $table->foreign('tourist_id')->references('tourist_id')->on('tourists')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('flight_tourist', function (Blueprint $table) {
            $table->dropForeign('flight_tourist_flight_id_foreign');
            $table->dropForeign('flight_tourist_tourist_id_foreign');
        });
    }
}
