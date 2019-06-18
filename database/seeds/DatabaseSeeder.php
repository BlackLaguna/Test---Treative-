<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Tourist::class, 100)->create();
        factory(App\Flight::class, 5)->create();
    }
}
