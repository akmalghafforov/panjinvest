@extends('frontend.layouts.app')
@section('content')
<div x-data="NotFoundPage" data-page="NotFoundPage">
<div class="min-h-screen bg-[#F6F8FA] flex items-center justify-center px-4">
<div class="max-w-2xl w-full text-center">
<div class="mb-8">
<h1 class="text-9xl font-bold text-[#123A63] mb-4">404</h1>
<h2 class="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">Page Not Found</h2><p class="text-lg text-[#667085] mb-8">The page you're looking for doesn't exist or has been moved. </p></div>
<div class="bg-white rounded-sm  p-8 mb-8 border border-gray-100">
<h3 class="text-xl font-semibold text-[#1F2933] mb-4">What would you like to do?</h3>
<div class="grid md:grid-cols-2 gap-4"><a href="{{ route('frontend.home') }}" class="px-6 py-4 bg-[#0F8A5F] text-white rounded-sm hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Home&quot;)"></use></svg>Go to Homepage </a><a href="{{ route('frontend.opportunities') }}" class="px-6 py-4 border-2 border-[#123A63] text-[#123A63] rounded-sm hover:bg-[#123A63]/5 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg>Browse Opportunities </a></div></div>
<div class="text-sm text-[#667085]"><p class="mb-4">Need help? Contact our support team:</p>
<div class="flex justify-center gap-6"><a href="tel:+99234225XXXX" class="text-[#123A63] hover:text-[#667085] transition-colors">+992 3422 5-XX-XX </a><span>•</span><a href="mailto:invest@panjakent.tj" class="text-[#123A63] hover:text-[#667085] transition-colors">invest@panjakent.tj </a></div></div></div></div>
</div>
@endsection
