<header class="site-header" x-data="{open:false,search:false}" @keydown.escape.window="if(open||search){open=false;search=false;$refs.menu.focus()}">
<div class="shell nav-row">
<a class="brand" href="/" aria-label="Invest Panjakent home"><span class="brand-mark">IP</span><span>Invest Panjakent<small>Republic of Tajikistan</small></span></a>
<button class="menu-toggle" x-ref="menu" @click="open=!open" :aria-expanded="open" aria-controls="main-navigation"><x-public-icon name="Menu"/><span>Menu</span></button>
<nav id="main-navigation" :class="{'is-open':open}" aria-label="Main navigation">
@foreach(['/#why-panjakent'=>'Why Panjakent','/opportunities'=>'Opportunities','/map'=>'Investment Map','/guide'=>'Investor Guide','/news'=>'News'] as $href=>$label)
<a href="{{ $href }}" @click="open=false" @if(request()->getPathInfo() === $href || ($href === '/news' && request()->routeIs('frontend.news.*'))) aria-current="page" @endif>{{ $label }}</a>
@endforeach
<button class="search-toggle" @click="search=!search;$nextTick(()=>{if(search)$refs.search.focus()})" :aria-expanded="search" aria-controls="site-search" aria-label="Search opportunities"><x-public-icon name="Search"/></button>
<a class="button outline small" href="/portal"><x-public-icon name="LogIn"/>Investor Portal</a>
<a class="button small" href="/submit-interest"><x-public-icon name="FileText"/>Submit Interest</a>
</nav></div>
<form id="site-search" class="shell header-search" action="/opportunities" x-cloak x-show="search"><label for="site-search-input">Search investment opportunities</label><div><input id="site-search-input" x-ref="search" type="search" name="q" placeholder="Search opportunities, sectors or locations"><button class="button" type="submit">Search</button></div></form>
</header>
<a class="mobile-interest button" href="/submit-interest"><x-public-icon name="FileText"/>Submit Investment Interest</a>
