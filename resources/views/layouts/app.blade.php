<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Networking') }}</title>
    <!-- Styles -->
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    <link href="{{asset('chat/css/style.css')}}" rel="stylesheet">
    <!-- Plugins -->
    <link href="{{asset('plugins/fontawesome/css/all.min.css')}}" rel="stylesheet">
    <!-- Styles -->
    @yield('head-css')
    <!-- Scripts -->
    @yield('head-js')
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
    <div id="app">
        @include('layouts.header')
        @yield('content')
    </div>
</body>
@yield('scripts')
</html>
