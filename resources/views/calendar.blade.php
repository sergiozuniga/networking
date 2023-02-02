@extends('layouts.app')
@section('head-css')
<link href="{{asset('plugins/fullcalendar/lib/main.min.css')}}" rel='stylesheet'>
@endsection
@section('head-js')
<script src="{{asset('plugins/jquery/jquery.min.js')}}"></script><script src="{{asset('plugins/fullcalendar/lib/main.min.js')}}"></script>
<script src="{{asset('plugins/fullcalendar/lib/locales-all.min.js')}}"></script>
<script src="{{asset('js/calendar.js')}}"></script>
@endsection
@section('content')
<div class="container">
    <h3 class="text-center text-primary" style="color: #4C1D93 !important;">{{__('Calendar of ')}} {{@$user->name}}</h3>
    <div id="calendar"></div>
</div>
@endsection
@section('scripts')
<script src="{{asset('js/app.js')}}"></script>
<div class="modal fade" id="eventModal"aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">{{__('Event')}}</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="title">{{__('Title')}}</label>
                        <input type="text" name="title" id="title" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="description">{{__('Description')}}</label>
                        <textarea name="" id="description" cols="20" rows="3" class="form-control"></textarea>
                        </div>
                    <div class="form-group">
                        <label for="start">{{__('Start time')}}</label>
                        <input type="datetime-local" name="start" id="start" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="end">{{__('End time')}}</label>
                        <input type="datetime-local" name="end" id="end" class="form-control">
                    </div>
                    <input type="hidden" name="id" id="id">
                </form>
            </div>
            <div class="modal-footer">
                <button id="btnAdd"    type="button" class="btn btn-success">{{__('Add')}}</button>
                <button id="btnUpdate" type="button" class="btn btn-primary">{{__('Update')}}</button>
                <button id="btnDelete" type="button" class="btn btn-danger">{{__('Delete')}}</button>
                <button id="btnClose"  type="button" class="btn btn-secondary" data-dismiss="modal">{{__('Close')}}</button>
            </div>
        </div>
    </div>
</div>
@endsection
