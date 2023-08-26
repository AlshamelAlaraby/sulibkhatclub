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
        Schema::table('cm_type_permissions', function (Blueprint $table) {
            $table->dropColumn('cm_permissions_id');
            $table->unsignedBigInteger('cm_permissions_id');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cm_type_permissions', function (Blueprint $table) {
            $table->dropColumn('cm_permissions_id');

            $table->json('cm_permissions_id');
        });
    }
};