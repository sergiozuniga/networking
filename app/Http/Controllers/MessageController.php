<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Nahid\Talk\Facades\Talk;
use Illuminate\Support\Facades\View;
use App\Models\User;

class MessageController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');

    }

    public function chatHistory($id)
    {
        Talk::setAuthUserId(auth()->user()->id);
        $conversations = Talk::getMessagesByUserId($id, 0, 50);
        $user = '';
        $messages = [];
        if(!$conversations) {
            $user = User::find($id);
        } else {
            $user = $conversations->withUser;
            $messages = $conversations->messages;
        }

        if (count($messages) > 0) {
            $messages = $messages->sortBy('id');
        }
        $threads = Talk::threads();

        return view('chat', compact('messages', 'user', 'threads'));
    }

    public function ajaxSendMessage(Request $request)
    {
        Talk::setAuthUserId(auth()->user()->id);
        if ($request->ajax()) {
            $rules = [
                'message-data'=>'required',
                '_id'=>'required'
            ];

            $this->validate($request, $rules);

            $body = $request->input('message-data');
            $userId = $request->input('_id');

            if ($message = Talk::sendMessageByUserId($userId, $body)) {
                $html = view('ajax.newMessageHtml', compact('message'))->render();
                return response()->json(['status'=>'success', 'html'=>$html], 200);
            }
        }
    }

    public function ajaxDeleteMessage(Request $request, $id)
    {
        Talk::setAuthUserId(auth()->user()->id);
        if ($request->ajax()) {
            if(Talk::deleteMessage($id)) {
                return response()->json(['status'=>'success'], 200);
            }

            return response()->json(['status'=>'errors', 'msg'=>'something went wrong'], 401);
        }
    }
}
