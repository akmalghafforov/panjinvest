@extends('frontend.layouts.app')
@section('content')
<div x-data="SubmitInterestSuccessPage" data-page="SubmitInterestSuccessPage">
<div class="bg-[#F6F8FA] min-h-screen py-12">
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8 text-center">
<div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0F8A5F]/10 mb-6"><svg class="h-10 w-10 text-[#0F8A5F]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg></div>
<h1 class="text-3xl font-bold text-[#1F2933] mb-4">Thank You for Your Interest!</h1><p class="text-lg text-[#667085] mb-6">Your investment interest has been submitted successfully. Our investor support team will review your request and contact you. </p>
<div class="inline-flex items-center gap-2 px-6 py-3 bg-[#123A63]/5 rounded-lg"><span class="text-sm text-[#667085]">Application Reference Number:</span><span class="font-mono font-semibold text-[#123A63]"><span x-text="referenceNumber"></span></span></div><p class="text-sm text-[#667085] mt-4">Please save this reference number for your records. You can use it to track your application. </p></div>
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">What Happens Next?</h2>
@include('components.timeline', ['scope' => 'Timeline(()=>({steps:nextSteps}))'])</div>
<div class="grid md:grid-cols-3 gap-6 mb-8"><a href="{{ route('frontend.portal') }}" class="block">
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
<div class="p-3 bg-[#123A63]/10 rounded-lg w-fit mb-4"><svg class="h-6 w-6 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg></div>
<h3 class="font-semibold text-[#1F2933] mb-2">Go to Investor Portal</h3><p class="text-sm text-[#667085]">Track your application and upload documents</p></div></a><a href="{{ route('frontend.opportunities') }}" class="block">
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
<div class="p-3 bg-[#0F8A5F]/10 rounded-lg w-fit mb-4"><svg class="h-6 w-6 text-[#0F8A5F]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg></div>
<h3 class="font-semibold text-[#1F2933] mb-2">View More Opportunities</h3><p class="text-sm text-[#667085]">Explore other investment projects</p></div></a><a href="{{ route('frontend.contact') }}" class="block">
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
<div class="p-3 bg-[#D6A536]/10 rounded-lg w-fit mb-4"><svg class="h-6 w-6 text-[#D6A536]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Phone&quot;)"></use></svg></div>
<h3 class="font-semibold text-[#1F2933] mb-2">Contact Support</h3><p class="text-sm text-[#667085]">Get immediate assistance from our team</p></div></a></div>
<div class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-lg p-8 text-white">
<h2 class="text-2xl font-semibold mb-4">Need Immediate Assistance?</h2><p class="text-white/90 mb-6">Our investor support team is available to answer your questions and guide you through the process. </p>
<div class="grid md:grid-cols-2 gap-6">
<div class="bg-white/10 rounded-lg p-4">
<div class="flex items-center gap-3 mb-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Phone&quot;)"></use></svg>
<h3 class="font-semibold">Hotline</h3></div><p class="text-white/90">+992 xxx xxx xxx</p><p class="text-sm text-white/70">Monday - Friday, 9:00 - 18:00</p></div>
<div class="bg-white/10 rounded-lg p-4">
<div class="flex items-center gap-3 mb-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MessageCircle&quot;)"></use></svg>
<h3 class="font-semibold">WhatsApp</h3></div><p class="text-white/90">+992 xxx xxx xxx</p><p class="text-sm text-white/70">Available 24/7</p></div>
<div class="bg-white/10 rounded-lg p-4">
<div class="flex items-center gap-3 mb-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg>
<h3 class="font-semibold">Telegram</h3></div><p class="text-white/90">@InvestPanjakent</p><p class="text-sm text-white/70">Fast response</p></div>
<div class="bg-white/10 rounded-lg p-4">
<div class="flex items-center gap-3 mb-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg>
<h3 class="font-semibold">Email</h3></div><p class="text-white/90">invest@panjakent.tj</p><p class="text-sm text-white/70">Response within 24 hours</p></div></div></div>
<div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
<h3 class="font-semibold text-blue-900 mb-2">Official Verified Contact</h3><p class="text-sm text-blue-800 mb-2">All investor requests are registered and reviewed officially by the Panjakent Investment Support Department. </p><p class="text-sm text-blue-800">If anyone asks for payment or unofficial fees during the application process, please report it immediately to our anti-corruption hotline. </p></div></div></div>
</div>
@endsection
