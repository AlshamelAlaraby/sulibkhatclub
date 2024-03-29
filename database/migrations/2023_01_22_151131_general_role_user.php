<?php

use App\Traits\ConnTrait;
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
        Schema::create('general_role_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->unsignedInteger('role_id')->index()->nullable();
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
        Schema::dropIfExists('general_role_user');
    }
};
