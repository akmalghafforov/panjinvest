@extends('frontend.layouts.app', ['pageTitle' => $article['title'].' | Invest Panjakent', 'pageDescription' => $article['excerpt']])
@section('content')
<div data-page="NewsDetailPage" class="redesign">
    <article class="section shell news-article">
        <a class="text-link" href="{{ route('frontend.news') }}">← Back to news</a>
        <h1>{{ $article['title'] }}</h1>
        <p><time datetime="{{ $article['date'] }}">{{ \Carbon\Carbon::parse($article['date'])->format('F j, Y') }}</time></p>
        @if($article['sample'])<p class="sample-notice"><strong>Sample article.</strong> This is illustrative content, not an actual announcement, event or investment result.</p>@endif
        <figure><x-concept-photo :project="$article" :eager="true" sizes="(max-width: 900px) 100vw, 844px" /><figcaption>Illustrative photograph · {{ $article['alt'] }}. See photography credits below.</figcaption></figure>
        <div class="news-body">@foreach($article['body'] as $paragraph)<p>{{ $paragraph }}</p>@endforeach</div>
    </article>
    @include('frontend.partials.photo-credits')
</div>
@endsection
