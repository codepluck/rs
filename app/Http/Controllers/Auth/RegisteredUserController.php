<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Auth\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    // public function store(Request $request): Response
    public function store(Request $request)

    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required',  Rules\Password::defaults()],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'data' => [
                    'errors' => $validator->errors()
                ],
            ]);
        }



        $verifyEmail = env('VERIFY_EMAIL');
        $user = User::create([
            'name' => $request->name || Str::random(22),
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));
        if (!$verifyEmail) {
            Auth::login($user);
        }
        $token = $request->user()->createToken($request->email);

        return response()->json([
            'status' => true,
            'data' => [
                'user' => auth()->user()
            ],
            'token' => $token->plainTextToken
        ]);
    }
}
