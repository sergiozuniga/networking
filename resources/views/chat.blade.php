@extends('layouts.app')
@section('content')
<div class="container-chat clearfix">
    <div class="people-list body" id="people-list">
        <div class="search" style="text-align: center">
            <a href="{{url('/home')}}" style="font-size:16px; text-decoration:none; color: white;"><i class="fa fa-user"></i> {{auth()->user()->name}}</a>
        </div>
        <ul class="list" style="list-style: none">
            @foreach($threads as $inbox)
                @if(!is_null($inbox->thread))
                    <li class="clearfix">
                        <a href="{{route('message', ['id'=>$inbox->withUser->id])}}">
                            <img src="{{$inbox->withUser->avatar}}" alt="avatar" />
                            <div class="about">
                                <div class="name">{{$inbox->withUser->name}}</div>
                            </div>
                        </a>
                    </li>
                @endif
            @endforeach
        </ul>
    </div>
    <div class="chat">
        <div class="chat-header clearfix">
            @if(isset($user))
                <img src="{{@$user->avatar}}" alt="avatar" />
            @endif
            <div class="chat-about">
                @if(isset($user))
                    <div class="chat-with">Chat {{__('with')}} {{@$user->name}}</div>
                @else
                    <div class="chat-with">{{ __('No Thread Selected') }}</div>
                @endif
            </div>
            <i class="fa fa-star"></i>
        </div>
        <div class="chat-history clearfix">
            <ul id="talkMessages" style="list-style: none">
                @foreach($messages as $message)
                    @if($message->sender->id == auth()->user()->id)
                        <li class="clearfix" id="message-{{$message->id}}">
                            <div class="message-data align-right">
                                <span class="message-data-time" >{{$message->humans_time}} {{__('ago')}}</span> &nbsp; &nbsp;
                                <span class="message-data-name" >{{$message->sender->name}}</span>
                                <a href="#" class="talkDeleteMessage" data-message-id="{{$message->id}}" title="{{ __('Delete Message') }}"><i class="fa fa-close"></i></a>
                            </div>
                            <div class="message other-message float-right">
                                {{$message->message}}
                            </div>
                        </li>
                    @else
                        <li id="message-{{$message->id}}">
                            <div class="message-data">
                                <span class="message-data-name"> <a href="#" class="talkDeleteMessage" data-message-id="{{$message->id}}" title="Delete Messag"><i class="fa fa-close" style="margin-right: 3px;"></i></a>{{$message->sender->name}}</span>
                                <span class="message-data-time">{{$message->humans_time}} ago</span>
                            </div>
                            <div class="message my-message">
                                {{$message->toHtmlString()}}
                            </div>
                        </li>
                    @endif
                @endforeach
            </ul>
        </div>
        <div class="chat-message clearfix">
            <form action="" method="post" id="talkSendMessage">
                <textarea name="message-data" id="message-data" placeholder ="{{__('Type your message')}}" rows="3"></textarea>
                <input type="hidden" name="_id" value="{{@request()->route('id')}}">
                <a href="{{route('home')}}" class="btn btn-outline-dark btn-md float-left" style="width: 40%"><i class="fas fa-undo"></i> {{__('Return')}}</a>
                <button class="btn btn-outline-success btn-md float-right" style="width: 40%" type="submit"><i class="fas fa-comments"></i> {{__('Send Message')}}</button>
             </form>
        </div>
    </div>
</div>
<script>
    var __baseUrl = "{{url('/')}}"
    var show = function(data) {
        alert(data.sender.name + " - '" + data.message + "'");
    }
    var msgshow = function(data) {
        var html = '<li id="message-' + data.id + '">' +
            '<div class="message-data">' +
            '<span class="message-data-name"> <a href="#" class="talkDeleteMessage" data-message-id="' + data.id + '" title="Delete Messag"><i class="fa fa-close" style="margin-right: 3px;"></i></a>' + data.sender.name + '</span>' +
            '<span class="message-data-time">1 Second ago</span>' +
            '</div>' +
            '<div class="message my-message">' +
            data.message +
            '</div>' +
            '</li>';
        $('#talkMessages').append(html);
        var objDiv = $('.chat-history');
        objDiv.scrollTop(objDiv.height());
    }
</script>
{!! talk_live(['user'=>["id"=>auth()->user()->id, 'callback'=>['msgshow']]]) !!}
@endsection
@section('scripts')
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('chat/js/talk.js')}}"></script>
<script src="{{asset('plugins/jquery/jquery.min.js')}}"></script>
<script src="{{asset('plugins/handlebars/handlebars.min.js')}}"></script>
<script src="{{asset('plugins/list/list.min.js')}}"></script>
@endsection
