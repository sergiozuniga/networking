@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="card text-white border-primary mb-3" style="width: 80%;">
            <div class="card-header bg-primary border-success">
                <h2 class="text-center"><strong>Ver Artículo</strong></h2>
            </div>
            <div class="card-body text-dark bg-transparent border-primary">
                <div class="row form-group">
                    <label class="text-left col-md-4 col-form-label" for="descripcion"><strong>Descripción</strong></label>
                    <input class="form-control col-md-6" type="text" name="descripcion" value="{{ $articulo->descripcion }}" readonly>
                </div>
                <div class="row form-group">
                    <label class="text-left col-md-4 col-form-label" for="precio"><strong>Precio</strong></label>
                    <input class="form-control col-md-6" type="number" name="precio" value="{{ $articulo->precio }}" readonly>
                </div>
                <div class="row form-group">
                    <label class="text-left col-md-4 col-form-label" for="precio"><strong>Stock</strong></label>
                    <input class="form-control col-md-6" type="number" name="stock" value="{{ $articulo->stock }}" readonly>
                </div>
            </div>
            <div class="card-footer bg-transparent border-primary">
                <div class="row justify-content-center align-items-center">
                    <a class="btn btn-primary" href="{{ route('articulos.index') }}"><i class="fa fa-undo"></i> Volver</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
