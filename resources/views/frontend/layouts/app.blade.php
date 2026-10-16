<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="{{ asset('fonts/fonts.css') }}">
<link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{{ $pageDescription ?? 'Investment opportunities and investor support in Panjakent, Tajikistan.' }}">
<title>{{ $pageTitle ?? 'Invest Panjakent' }}</title>

@include('components.context')
@vite(['resources/css/app.css', 'resources/js/frontend.js'])
@isset($projects)<script>window.conceptData = {{ Illuminate\Support\Js::from($projects) }}; window.conceptMapConfig = {{ Illuminate\Support\Js::from($mapConfig) }};</script>@endisset
</head>
<body data-layout="frontend">

<a class="skip-link" href="#main-content">Skip to content</a>
@include('components.icons')
<div class="min-h-screen flex flex-col bg-white">



@include('frontend.partials.header')
<main id="main-content" tabindex="-1" class="flex-1">@yield('content')</main>

@include('frontend.partials.footer')
</div>
</body>
</html>
