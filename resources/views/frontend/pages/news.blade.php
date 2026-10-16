@extends('frontend.layouts.app', ['pageTitle' => 'News | Invest Panjakent', 'pageDescription' => 'News and perspectives from Panjakent. Initial articles are clearly marked sample content.'])
@section('content')
<div data-page="NewsPage" class="redesign">
    <section class="section shell">
        <p class="eyebrow">FROM PANJAKENT</p><h1>News</h1>
        <p class="disclaimer">Stories and perspectives from the region. Our initial articles are sample content for illustration.</p>
        @if(count($articles))
            <div class="news-index">@foreach($articles as $article)<x-news-card :article="$article" />@endforeach</div>
        @else
            <div class="empty-state"><h2>No news yet</h2><p>Please check back for updates.</p></div>
        @endif
    </section>
    @if(count($articles))@include('frontend.partials.photo-credits')@endif
</div>
@endsection
