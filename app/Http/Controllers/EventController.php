<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Event;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index($id)
    {
        $user = User::find($id);
    	return view('calendar', compact('user'));
    }

    public function calendar($id)
    {
    	$events = Event::where('user_id', '=', $id)
                    ->orWhere('invited_id', '=', $id)
                    ->get(['id', 'title', 'description', 'start', 'end', 'user_id', 'invited_id']);
        echo json_encode($events);
    }

    public function action(Request $request)
    {
        print_r(request()->all());
        /*
    	if($request->ajax())
    	{
    		if($request->action == 'add')
    		{
    			$event = Event::create([
    				'title'		  =>	$request->title,
    				'start'		  =>	$request->start,
    				'description' =>	$request->description,
    				'end'		  =>	$request->end,
                    'user_id'	  =>	$request->user_id,
                    'invited_id'  =>	$request->invited_id
    			]);
    			return response()->json($event);
    		}

    		if($request->action == 'update')
    		{
    			$event = Event::find($request->id)->update([
    				'title'		  =>	$request->title,
    				'description' =>	$request->description,
    				'start'		  =>	$request->start,
    				'end'		  =>	$request->end,
                    'user_id'	  =>	$request->user_id,
                    'invited_id'  =>	$request->invited_id
    			]);
    			return response()->json($event);
    		}

    		if($request->action == 'delete')
    		{
    			$event = Event::find($request->id)->delete();
    			return response()->json($event);
    		}
    	}
        */
    }
}
