<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Nahid\Talk\Live\Broadcast;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $users = User::where('id', '<>', auth()->user()->id)
                    ->orderBy('name', 'asc')
                    ->get();
        return view('home', compact('users'));
    }
}
