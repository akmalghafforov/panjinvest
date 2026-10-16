<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Investment opportunities and investor support in Panjakent, Tajikistan.">
<title>Invest Panjakent</title>

@include('components.context')
@vite(['resources/css/app.css', 'resources/js/frontend.js'])
</head>
<body data-layout="frontend">

@include('components.icons')
<div class="min-h-screen flex flex-col bg-[#F6F8FA]">

@include('frontend.partials.top-bar')

@include('frontend.partials.header')
<main class="flex-1">@yield('content')</main>

@include('frontend.partials.footer')
</div>
</body>
</html>
