@extends('backend.layouts.app')
@section('content')
<div x-data="Admin404Page" data-page="Admin404Page">

@include('backend.partials.admin-page-start')
<div class="flex-1 flex items-center justify-center px-4 py-6 md:py-8">
<div class="max-w-2xl w-full text-center">
<div class="mb-6 md:mb-8">
<div class="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-red-50 mb-4 md:mb-6"><svg class="h-8 w-8 md:h-12 md:w-12 text-red-500" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;AlertCircle&quot;)"></use></svg></div>
<h1 class="text-4xl md:text-6xl font-bold text-[#123A63] mb-3 md:mb-4">404</h1>
<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2933] mb-3 md:mb-4">Admin Page Not Found </h2><p class="text-base md:text-lg text-[#667085] mb-6 md:mb-8">The admin page you're looking for doesn't exist or hasn't been implemented yet. </p></div>
<div class="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
<h3 class="text-lg md:text-xl font-semibold text-[#1F2933] mb-4 md:mb-6">Where would you like to go? </h3>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"><a href="{{ route('backend.dashboard') }}"><x-button type="button" class="h-9 px-4 w-full bg-[#123A63] hover:bg-[#123A63]/90 text-white gap-2 py-5 md:py-6 text-sm md:text-base has-[>svg]:px-3"><svg class="h-4 w-4 md:h-5 md:w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;LayoutDashboard&quot;)"></use></svg>Admin Dashboard </x-button></a><a href="{{ route('backend.crm') }}"><x-button type="button" class="bg-background h-9 px-4 w-full border-2 border-[#123A63] text-[#123A63] hover:bg-[#123A63]/5 gap-2 py-5 md:py-6 text-sm md:text-base has-[>svg]:px-3"><svg class="h-4 w-4 md:h-5 md:w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ArrowLeft&quot;)"></use></svg>Investor CRM </x-button></a><a href="{{ route('frontend.home') }}"><x-button type="button" class="bg-background h-9 px-4 w-full border-2 border-gray-300 text-[#1F2933] hover:bg-gray-50 gap-2 py-5 md:py-6 text-sm md:text-base has-[>svg]:px-3"><svg class="h-4 w-4 md:h-5 md:w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Home&quot;)"></use></svg>Public Homepage </x-button></a><a href="{{ route('frontend.opportunities') }}"><x-button type="button" class="bg-background h-9 px-4 w-full border-2 border-gray-300 text-[#1F2933] hover:bg-gray-50 gap-2 py-5 md:py-6 text-sm md:text-base has-[>svg]:px-3">Opportunities </x-button></a></div></div>
<div class="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg"><p class="text-sm text-[#123A63]"><strong>Note:</strong> Some admin features are still under development. Please check back later or contact the system administrator. </p></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
