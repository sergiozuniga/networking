@extends('layouts.app')
@section('head-js')
<script src="https://meet.jit.si/external_api.js"></script>
@endsection
@section('content')
<div class="m0 vh-20 row justify-content-center align-items-center">
    <center>
        <div class="container" id="room-meet"></div>
    </center>
    <script>
    var api = null;
    var domain = "meet.jit.si";
    var options = {
        "roomName": "{{__('Video Call')}} {{__('with')}} {{@$user->name}}",
        "parentNode": document.querySelector('#room-meet'),
        "width": 1280,
        "height": 800,
    };
    api = new JitsiMeetExternalAPI(domain, options);
    </script>
</div>
@endsection
