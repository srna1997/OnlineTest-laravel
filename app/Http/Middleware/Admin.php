<?php

namespace App\Http\Middleware;

use Closure;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(auth()->user()->role == 'Admin' || auth()->user()->role == 'Profesor')
        {
            return $next($request);
        }
        return redirect('/dashboard')->with('error','You have not admin access');
    }
}
