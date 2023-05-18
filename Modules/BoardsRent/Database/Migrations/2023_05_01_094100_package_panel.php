<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('boards_rent_package_panel', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('package_id');
            $table->unsignedBigInteger('panel_id');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("boards_rent_package_panel");
    }
};
