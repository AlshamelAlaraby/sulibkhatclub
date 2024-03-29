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
        Schema::create('general_translations', function (Blueprint $table) {
            $table->id();
            $table->string ('key')->index()->nullable();
            $table->string ('default_en')->nullable ();
            $table->string ('default_ar')->nullable ();
            $table->string ('new_en')->nullable ();
            $table->string ('new_ar')->nullable ();
            $table->string ('screen')->nullable();
            $table->unsignedInteger ('company_id')->index()->nullable();
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
        Schema::dropIfExists('general_translations');
    }
};
