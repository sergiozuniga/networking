<?php

namespace App\Http\Controllers;

use App\Models\Videocall;
use Illuminate\Http\Request;
use App\Models\User;

class VideocallController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index($id)
    {
        $user = User::find($id);
        $event = Videocall::create([
            'title'		 =>	'Video llamada con ' . $user->name,
            'user_id'	 =>	auth()->user()->id,
            'invited_id' =>	$user->id
        ]);
        return view('video', compact('user'));
    }
}
