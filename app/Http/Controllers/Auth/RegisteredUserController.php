<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Rules\ValidarCelular;
use App\Rules\ValidarCorreo;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'identification' => ['required', 'unique:' . User::class, 'min:13', 'max:13'],
            'name' => 'required|max:255',
            'bussness_name' => 'required|max:255',
            'whatsapp' => ['required', new ValidarCelular],
            'email' => ['required', 'email', 'max:255', 'unique:' . User::class, new ValidarCorreo],
            'password' => ['required', Rules\Password::defaults()],
        ], [
            'identification.required' => "La identificación es obligatoria",
            'identification.unique' => "La identificación ya se encuentra registrada",
            'identification.min' => "La identificación debe tener 13 caracteres",
            'identification.max' => "La identificación debe tener 13 caracteres",
            'name.required' => "El nombre es obligatorio",
            'name.max' => "El nombre debe tener máximo 255 caracteres",
            'bussness_name.required' => "El nombre de la empresa es obligatorio",
            'bussness_name.max' => "El nombre de la empresa debe tener máximo 255 caracteres",
            'whatsapp.required' => "El número de whatsapp es obligatorio",
            'email.required' => "El correo es obligatorio",
            'email.email' => "El correo no es válido",
            'email.max' => "El correo debe tener máximo 255 caracteres",
            'email.unique' => "Este correo ya se ecnuentra registrado",
            'password.required' => "La contraseña es obligatoria",
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
        ]);

        $user = User::create([
            'identification' => $request->identification,
            'name' => $request->name,
            'bussness_name' => $request->bussness_name,
            'whatsapp' => $request->whatsapp,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
