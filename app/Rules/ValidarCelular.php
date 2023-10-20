<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;

class ValidarCelular implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!$this->validarTelefono($value)) {
            $fail('El celular no es valido');
        }
    }

    private function validarTelefono(string $value): bool
    {
        if (strlen($value) < 4) return false;

        //consultar api1
        $url = 'https://phonevalidation.abstractapi.com/v1/?api_key=7678748c57244785bc99109520e35d5f&phone=+593' . $value;
        
        $celular = Http::withHeaders(['Content-Type' => 'application/json; charset=UTF-8', 'verify' => false,])
            ->withOptions(["verify" => false])
            ->get($url)
            ->json();

        if (isset($celular['error'])) return false;

        if ($celular['valid'] == false) return false;

        return true;
    }
}
