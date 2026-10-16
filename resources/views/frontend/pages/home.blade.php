@extends('frontend.layouts.app')
@section('content')
<div data-page="HomePage" class="redesign"><section class="hero heritage-hero"><x-concept-photo :project="$projects[1]" :eager="true" sizes="100vw"/><div class="hero-shade"></div><div class="shell hero-content"><p class="eyebrow">ROOTED IN HERITAGE. OPEN TO POSSIBILITY.</p><h1>A remarkable place.<br>A new perspective<br>on investment.</h1><p>Discover Panjakent. Where the Zarafshon Valley’s landscapes, local knowledge and living traditions inspire new ideas.</p><div class="actions"><a class="button" href="/opportunities">Explore opportunities ↗</a><a class="button light" href="/map">Explore the map →</a></div><small>Ancient Panjakent, Tajikistan · Destination context</small></div></section>
<section class="stats-section shell"><div class="section-label">THE NATIONAL PICTURE <h2>Tajikistan at a glance — 2025</h2></div><div class="stats-grid">@foreach($statistics as $stat)<div><strong>{{ $stat['display'] }}</strong><p>{{ $stat['label'] }}</p><a href="{{ $stat['source'] }}">World Bank · {{ $stat['year'] }} ↗</a></div>@endforeach</div></section>
<section class="section shell home-introduction" aria-labelledby="region-heading">
    <div>
        <p class="eyebrow">MEET PANJAKENT</p>
        <h2 id="region-heading">A valley shaped by exchange.</h2>
        <p class="lead">Cultural heritage, mountain journeys and local production come together in the Zarafshon Valley.</p>
        <p>Panjakent offers a starting point for exploring ideas that connect visitor services with the skills and livelihoods of local communities. This catalog focuses on accommodation, agricultural value chains and traditional crafts.</p>
        <a class="text-link" href="/map">Discover the concept areas →</a>
    </div>
    <div class="region-facts">
        <article><span class="eyebrow">HERITAGE</span><h3>Look beyond a single destination</h3><p>The UNESCO-listed site of Sarazm records settlement, agriculture and long-distance exchange in Central Asia during the fourth and third millennia BCE. It adds a distinct heritage dimension to the wider area.</p><a class="text-link" href="https://whc.unesco.org/en/list/1141/">Explore Sarazm with UNESCO ↗</a></article>
        <article><span class="eyebrow">LANDSCAPES</span><h3>Connect culture with the mountains</h3><p>ZTDA’s regional itineraries include Panjakent, the Seven Lakes and Fann Mountain hiking routes. These provide context for researching accommodation and visitor services, while demand and seasonality still need to be assessed.</p><a class="text-link" href="https://ztda-tourism.tj/tours/">See regional itineraries ↗</a></article>
    </div>
</section>
<section id="why-panjakent" class="section shell"><div class="section-heading"><div><p class="eyebrow">A VALLEY WITH CHARACTER</p><h2>Why Panjakent?</h2></div><p>Explore ideas grounded in the region’s places, people and productive traditions.</p></div><div class="strengths"><article><span>01 / DISCOVER</span><h3>Landscapes that invite a longer stay</h3><p>Mountain lakes and cultural destinations provide context for community-led visitor experiences.</p></article><article><span>02 / GROW</span><h3>More value from local harvests</h3><p>Fruit processing and better handling offer practical directions for feasibility research.</p></article><article><span>03 / CREATE</span><h3>Living heritage, made by hand</h3><p>Panjakent’s suzani tradition connects skilled craft with workshops and visitor retail.</p></article></div></section>
<section class="section sector-overview" aria-labelledby="sectors-heading"><div class="shell">
    <div class="section-heading"><div><p class="eyebrow">FIND YOUR FOCUS</p><h2 id="sectors-heading">Three sectors. Practical starting points.</h2></div><p>Choose a sector to see the proposed activities and the questions that should shape a feasibility study.</p></div>
    <div class="sector-overview-grid">
        @foreach([
            ['sector'=>'Tourism', 'image'=>0, 'heading'=>'Thoughtful stays & local experiences', 'description'=>'Explore guesthouse improvements around Seven Lakes and heritage accommodation in Panjakent.', 'assess'=>'Visitor demand, seasonal access, water and sanitation, host partnerships and service quality.'],
            ['sector'=>'Agriculture', 'image'=>2, 'heading'=>'More value, closer to producers', 'description'=>'Consider fruit drying and packaging, produce cooling, and honey collection services.', 'assess'=>'Reliable supply, food safety, power needs, storage losses, logistics and routes to market.'],
            ['sector'=>'Crafts', 'image'=>4, 'heading'=>'Craft knowledge, shared with visitors', 'description'=>'Explore a suzani workshop and showroom combining production, learning and retail.', 'assess'=>'Artisan partnerships, fair compensation, materials, product demand and workshop capacity.']
        ] as $sector)
            <article class="sector-feature">
                <x-concept-photo :project="$projects[$sector['image']]" />
                <div><div class="sector-feature-label"><span class="eyebrow">{{ $sector['sector'] }}</span><span>{{ count(array_filter($projects, fn($project) => $project['sector'] === $sector['sector'])) }} concepts</span></div>
                <h3>{{ $sector['heading'] }}</h3><p>{{ $sector['description'] }}</p><p class="sector-assessment"><strong>Questions to explore</strong>{{ $sector['assess'] }}</p>
                <a class="text-link" href="{{ route('frontend.opportunities', ['sector'=>$sector['sector']]) }}">Explore {{ strtolower($sector['sector']) }} →</a></div>
            </article>
        @endforeach
    </div>
</div></section>
<section class="section tinted"><div class="shell"><div class="section-heading"><div><p class="eyebrow">IDEAS TO EXPLORE</p><h2>Local strengths. New possibilities.</h2></div><a class="text-link" href="/opportunities">All {{ count($projects) }} concepts →</a></div><div class="concept-grid">@foreach([$projects[0],$projects[2],$projects[4]] as $project)<x-concept-card :project="$project"/>@endforeach</div></div></section>
<section class="section shell"><div class="section-heading"><div><p class="eyebrow">PUT POSSIBILITY IN PERSPECTIVE</p><h2>Get to know the area.</h2></div><p>Find {{ count($projects) }} concepts across {{ count(array_unique(array_column($projects,'sector'))) }} sectors. Locations indicate areas, not selected sites.</p></div><div class="map-preview" data-map-preview><div class="geo-map" aria-label="Geographic preview of Panjakent and Seven Lakes"></div><div class="map-notice" role="status">Loading geographic preview…</div><button class="retry-map" hidden>Retry map</button></div><a class="text-link" href="/map">Open the interactive map →</a></section>
<section class="section shell investor-questions" aria-labelledby="questions-heading">
    <div><p class="eyebrow">BEFORE YOU TAKE THE NEXT STEP</p><h2 id="questions-heading">Know what you’re exploring.</h2><p>Use the catalog to frame your research and prepare a more useful conversation with potential partners.</p><a class="text-link" href="/contact">Discuss your questions →</a></div>
    <div class="home-faq">
        <details open><summary>Are these businesses currently seeking investment?</summary><p>No. The six entries are proposed concepts based on local sector context. They do not represent funding offers from existing businesses or confirmed investment-ready projects.</p></details>
        <details><summary>Have sites, budgets or returns been established?</summary><p>No site has been selected. Map pins show approximate areas. Capital requirements, operating costs, commercial returns and delivery schedules need independent feasibility work.</p></details>
        <details><summary>What should I prepare before discussing a concept?</summary><p>Outline your relevant experience, the activity you want to explore, your likely operating model and the questions you need answered. Identify what you need to learn about customers, local partners, sites, utilities and environmental impacts.</p></details>
        <details><summary>How should I approach a site visit?</summary><p>Agree meetings with willing local partners in advance. Check current travel conditions and access, then use the visit to validate demand, supply chains and practical operating needs. Heritage and community settings require particular care.</p></details>
        <details><summary>Does expressing interest submit a formal application?</summary><p>The current interest form is a browser demonstration. It does not save or send an application, establish a partnership or reserve a site.</p></details>
    </div>
</section>
<section class="section journey"><div class="shell"><p class="eyebrow">FROM INTEREST TO UNDERSTANDING</p><h2>Start with a conversation.</h2><div class="strengths"><article><span>01</span><h3>Explore a concept</h3><p>Review the proposed activity, area and supporting sector references.</p></article><article><span>02</span><h3>Assess the essentials</h3><p>Research demand, partners, sites, environmental impacts, costs and required approvals.</p></article><article><span>03</span><h3>Discuss the next step</h3><p>Bring your questions and independently develop a feasibility plan.</p></article></div><a class="button" href="/contact">Connect with Panjakent ↗</a></div></section>
@include('frontend.partials.photo-credits')
</div>
@endsection