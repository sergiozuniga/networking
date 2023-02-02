@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="card text-white border-primary mb-3" style="width: 80%;">
            <div class="card-header bg-primary border-success">
                <h2 class="text-center"><strong>Editar Artículo</strong></h2>
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
                <form action="{{ route('articulos.update',$articulo->id) }}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="row form-group">
                        <label class="text-left col-md-4 col-form-label" for="descripcion"><strong>Descripción</strong></label>
                        <input class="form-control col-md-6" type="text" descripcion="descripcion" value="{{ $articulo->descripcion }}">
                    </div>
                    <div class="row form-group">
                        <label class="text-left col-md-4 col-form-label" for="precio"><strong>Precio</strong></label>
                        <input class="form-control col-md-6" type="number" name="precio" value="{{ $articulo->precio }}">
                    </div>
                    <div class="row form-group">
                        <label class="text-left col-md-4 col-form-label" for="precio"><strong>Stock</strong></label>
                        <input class="form-control col-md-6" type="number" name="stock" value="{{ $articulo->stock }}">
                    </div>
                </form>
            </div>
            <div class="card-footer bg-transparent border-primary">
                <div class="row justify-content-center align-items-center">
                    <a class="btn btn-primary" href="{{ route('articulos.index') }}"><i class="fa fa-undo"></i> Volver</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> Grabar</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
