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
        Schema::create('general_sectors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('name_e');
            $table->unsignedInteger('parent_id')->index();
            $table->unsignedInteger('company_id')->index();
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
        Schema::dropIfExists('general_sectors');
    }
};
