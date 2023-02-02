@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="card text-white border-primary mb-3" style="width: 80%;">
            <div class="card-header bg-primary border-success">
                <h2 class="text-center"><strong>Agregar Videollamada</strong></h2>
            </div>
            @if ($errors->any())
                <div class="alert alert-danger">
                    <strong>Ups!</strong> Hubo algunos problemas con tu entrada.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <div class="card-body text-dark bg-transparent border-primary">
                <form action="{{ route('videocalls.store') }}" method="POST">
                    @csrf
                    <div class="row form-group">
                        <label class="text-left col-md-4 col-form-label" for="stock"><strong>Invitado</strong></label>
                        <select id="invited_id" name="invited_id" class="form-select @error('invited_id') is-invalid @enderror ">
                            <option value="">{{ __("Seleccione Invitado") }}</option>
                            @foreach ($users as $user)
                                <option
                                    value="{{ $user->id }}"
                                    {{ $videocall->invited_id == $user->id ? 'selected' : '' }}>
                                    {{$user->name}}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="row form-group">
                        <label class="text-left col-md-4 col-form-label" for="stock"><strong>Stock</strong></label>
                        <input class="form-control col-md-6" type="number" name="stock">
                    </div>
                </form>
            </div>
            <div class="card-footer bg-transparent border-primary">
                <div class="row justify-content-center align-items-center">
                    <a class="btn btn-primary" href="{{ route('videocalls.index') }}"><i class="fa fa-undo"></i> Volver</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> Grabar</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
