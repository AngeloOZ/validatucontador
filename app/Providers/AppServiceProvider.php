<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Schema::defaultStringLength(191);

        // Inertia::share('loggedUser', function () {

        //     if (!Auth::check()) return null;

        //     $userLogged = User::find(Auth::user()->id);

        //     if (!$userLogged) return Auth::user();
        //     unset($userLogged->email_verified_at, $userLogged->roles, $userLogged->created_at); 

        //     $userLogged->listRols = $userLogged->getRoleNames();
        //     $userLogged->listPermissions = $userLogged->getPermissionsViaRoles()->pluck('name');

        //     return $userLogged;
        // });
    }
}
