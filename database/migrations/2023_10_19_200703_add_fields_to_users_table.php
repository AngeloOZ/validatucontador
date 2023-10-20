<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            Schema::table('users', function (Blueprint $table) {
                $table->string('identification', 13)->unique()->before('name');
                $table->string('bussness_name', 255)->nullable()->after('name');
                $table->string('whatsapp', 20)->after('bussness_name');
                $table->boolean('status')->default(true)->after('password');
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('identification');
                $table->dropColumn('bussness_name');
                $table->dropColumn('whatsapp');
                $table->dropColumn('status');
            });
        });
    }
};
