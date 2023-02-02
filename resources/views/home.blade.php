@extends('layouts.app')
@section('content')
<div class="container-chat-users clearfix">
    <div class="chat-users">
        <div class="chat-header clearfix">
            @if(isset($user))
                <img src="{{auth()->user()->avatar}}" alt="avatar" />
            @endif
            <div class="chat-about">
                <div class="chat-with">{{__('Contacts')}}</div>
            </div>
            <i class="fa fa-star"></i>
        </div>
        <div class="chat-history">
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    @foreach($users as $user)
                    <tr>
                        <td>
                            <img src="{{$user->avatar}}">
                            {{$user->name}}
                        </td>
                        <td>
                            <a href="{{route('calendar', ['id'=>$user->id])}}" class="btn btn-outline-primary btn-block btn-md"><i class="far fa-calendar-alt"></i> {{__('Meeting')}}</a>
                        </td>
                        <td>
                            <a href="{{route('video', ['id'=>$user->id])}}" class="btn btn-outline-dark btn-block btn-md"><i class="fas fa-video"></i> {{__('Video Call')}}</a>
                        </td>
                        <td>
                            <a href="{{route('message', ['id'=>$user->id])}}" class="btn btn-outline-success btn-block btn-md"><i class="fas fa-comments"></i> {{__('Conversation')}}</a>
                        </td>
                    </tr>
                    @endforeach
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
<script src="{{asset('js/app.js')}}"></script>
@endsection
