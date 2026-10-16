@props(['article'])
<article class="concept-card news-card">
    <div class="card-content">
        <div class="card-meta"><time datetime="{{ $article['date'] }}">{{ \Carbon\Carbon::parse($article['date'])->format('F j, Y') }}</time>@if($article['sample'])<span class="badge">Sample article</span>@endif</div>
        <h3><a href="{{ route('frontend.news.show', ['id' => $article['id']]) }}">{{ $article['title'] }}</a></h3>
        <p>{{ $article['excerpt'] }}</p>
        <div class="card-bottom"><a href="{{ route('frontend.news.show', ['id' => $article['id']]) }}" aria-label="Read {{ $article['title'] }}">Read article →</a></div>
    </div>
</article>
