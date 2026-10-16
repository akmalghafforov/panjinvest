<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Investment opportunities and investor support in Panjakent, Tajikistan.">
<title>Invest Panjakent · Admin</title>

@include('components.context')
@vite(['resources/css/app.css', 'resources/js/backend.js'])
</head>
<body data-layout="backend">

@include('components.icons')
<div class="min-h-screen bg-[#F6F8FA]">@yield('content')</div>
</body>
</html>
