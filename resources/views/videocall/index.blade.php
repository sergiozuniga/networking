@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="card text-white border-primary mb-3" style="width: 100%;">
            <div class="card-header bg-primary border-success">
                <h2 class="text-center"><strong>Lista de Artículos</strong></h2>
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
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover">
                        <tr>
                            <th>Id</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th width="280px">Acciones</th>
                        </tr>
                        @foreach ($articulos as $articulo)
                        <tr>
                            <td>{{ $articulo->id }}</td>
                            <td>{{ $articulo->descripcion }}</td>
                            <td>{{ number_format($articulo->precio, 0, ',', '.') }}</td>
                            <td>{{ number_format($articulo->stock, 0, ',', '.') }}</td>
                            <td>
                                <form action="{{ route('articulos.destroy',$articulo->id) }}" method="POST">
                                    <a class="btn btn-primary btn-sm" style="width: 80px" href="{{ route('articulos.show',$articulo->id) }}"><i class="fa fa-info-circle"></i> Ver</a>
                                    <a class="btn btn-success btn-sm" style="width: 80px" href="{{ route('articulos.edit',$articulo->id) }}"><i class="fa fa-edit"></i> Editar</a>
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm" style="width: 80px"><i class="fa fa-minus-circle"></i> Eliminar</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </table>
                    {!! $articulos->links() !!}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
