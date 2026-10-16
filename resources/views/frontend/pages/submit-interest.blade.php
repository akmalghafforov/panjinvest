@extends('frontend.layouts.app')
@section('content')
<div x-data="SubmitInterestPage" data-page="SubmitInterestPage">
<div class="bg-[#F6F8FA] min-h-screen py-12">
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-8">
<h1 class="text-4xl font-bold text-[#1F2933] mb-4">Submit Investment Interest</h1><p class="text-lg text-[#667085]">Complete this form to express your interest in investing in Panjakent </p></div>
<div class="mb-8">
@include('frontend.partials.form-stepper', ['scope' => 'FormStepper(()=>({steps:steps,currentStep:currentStep}))'])</div>
<div class="bg-white rounded-sm  border border-gray-200 p-8">
<template x-if="Boolean(currentStep === 1)">
<div class="space-y-6">
<div>
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Investor Information</h2></div>
<div class="grid md:grid-cols-2 gap-6">
<div><x-form.label for="fullName" >Full Name *</x-form.label><x-form.input id="fullName" ::value="formData.fullName" x-on:input="(e =&gt; updateField(&quot;fullName&quot;, e.target.value))($event)" placeholder="John Doe"  /></div>
<div><x-form.label for="companyName" >Company Name</x-form.label><x-form.input id="companyName" ::value="formData.companyName" x-on:input="(e =&gt; updateField(&quot;companyName&quot;, e.target.value))($event)" placeholder="Company Ltd."  /></div>
<div><x-form.label for="country" >Country *</x-form.label><x-form.input id="country" ::value="formData.country" x-on:input="(e =&gt; updateField(&quot;country&quot;, e.target.value))($event)" placeholder="e.g., Turkey, Iran, Russia"  /></div>
<div><x-form.label for="email" >Email *</x-form.label><x-form.input id="email" type="email" ::value="formData.email" x-on:input="(e =&gt; updateField(&quot;email&quot;, e.target.value))($event)" placeholder="investor@example.com"  /></div>
<div><x-form.label for="phone" >Phone / WhatsApp *</x-form.label><x-form.input id="phone" type="tel" ::value="formData.phone" x-on:input="(e =&gt; updateField(&quot;phone&quot;, e.target.value))($event)" placeholder="+992 xxx xxx xxx"  /></div>
<div><x-form.label for="investorType" >Investor Type *</x-form.label><select :value="formData.investorType" @change="(val =&gt; updateField(&quot;investorType&quot;, val))($event.target.value)" class="flex h-9 w-full items-center rounded-sm border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select type</option>
<template x-for="type in investorTypes"><option :value="type"><span x-text="type"></span></option></template></select></div></div></div></template>
<template x-if="Boolean(currentStep === 2)">
<div class="space-y-6">
<div>
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Investment Interest</h2></div>
<div class="grid md:grid-cols-2 gap-6">
<div><x-form.label for="sector" >Interested Sector *</x-form.label><select :value="formData.sector" @change="(val =&gt; updateField(&quot;sector&quot;, val))($event.target.value)" class="flex h-9 w-full items-center rounded-sm border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select sector</option>
<template x-for="sector in sectors"><option :value="sector"><span x-text="sector"></span></option></template></select></div>
<div><x-form.label for="selectedProject" >Selected Project (Optional)</x-form.label><x-form.input id="selectedProject" ::value="formData.selectedProject" x-on:input="(e =&gt; updateField(&quot;selectedProject&quot;, e.target.value))($event)" placeholder="Leave blank if exploring options"  /></div>
<div><x-form.label for="investmentAmount" >Estimated Investment Amount *</x-form.label><x-form.input id="investmentAmount" ::value="formData.investmentAmount" x-on:input="(e =&gt; updateField(&quot;investmentAmount&quot;, e.target.value))($event)" placeholder="e.g., $100,000 - $250,000"  /></div>
<div><x-form.label for="location" >Preferred Location</x-form.label><x-form.input id="location" ::value="formData.location" x-on:input="(e =&gt; updateField(&quot;location&quot;, e.target.value))($event)" placeholder="e.g., Seven Lakes, City Center"  /></div>
<div class="md:col-span-2"><x-form.label for="timeline" >Expected Investment Timeline *</x-form.label><select :value="formData.timeline" @change="(val =&gt; updateField(&quot;timeline&quot;, val))($event.target.value)" class="flex h-9 w-full items-center rounded-sm border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select timeline</option>
<template x-for="timeline in timelines"><option :value="timeline"><span x-text="timeline"></span></option></template></select></div></div></div></template>
<template x-if="Boolean(currentStep === 3)">
<div class="space-y-6">
<div>
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Message and Documents</h2><p class="text-[#667085]">All fields in this step are optional</p></div>
<div class="space-y-6">
<div><x-form.label for="message" >Short Message / Description of Interest</x-form.label><x-form.textarea id="message" ::value="formData.message" x-on:input="(e =&gt; updateField(&quot;message&quot;, e.target.value))($event)" placeholder="Tell us about your investment plans and goals..." ::rows="4" ></x-form.textarea></div>
<div><x-form.label for="questions" >Questions or Support Needed</x-form.label><x-form.textarea id="questions" ::value="formData.questions" x-on:input="(e =&gt; updateField(&quot;questions&quot;, e.target.value))($event)" placeholder="What questions do you have? What support would be helpful?" ::rows="4" ></x-form.textarea></div>
<div class="space-y-4">
<div class="border-2 border-dashed border-gray-300 rounded-sm p-6"><label class="flex items-center gap-2 mb-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Upload&quot;)"></use></svg>Business Proposal (Optional) </label><input type="file" @change="(e =&gt; updateField(&quot;businessProposal&quot;, e.target.files?.[0] || null))($event)" accept=".pdf,.doc,.docx" class="text-sm"><p class="text-[13px] text-[#667085] mt-2">PDF, DOC, DOCX (Max 10MB)</p></div>
<div class="border-2 border-dashed border-gray-300 rounded-sm p-6"><label class="flex items-center gap-2 mb-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Upload&quot;)"></use></svg>Company Profile (Optional) </label><input type="file" @change="(e =&gt; updateField(&quot;companyProfile&quot;, e.target.files?.[0] || null))($event)" accept=".pdf,.doc,.docx" class="text-sm"><p class="text-[13px] text-[#667085] mt-2">PDF, DOC, DOCX (Max 10MB)</p></div>
<div class="border-2 border-dashed border-gray-300 rounded-sm p-6"><label class="flex items-center gap-2 mb-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Upload&quot;)"></use></svg>Financial Information (Optional) </label><input type="file" @change="(e =&gt; updateField(&quot;financialInfo&quot;, e.target.files?.[0] || null))($event)" accept=".pdf,.doc,.docx" class="text-sm"><p class="text-[13px] text-[#667085] mt-2">PDF, DOC, DOCX (Max 10MB)</p></div></div></div></div></template>
<template x-if="Boolean(currentStep === 4)">
<div class="space-y-6">
<div>
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Confirmation</h2></div>
<div class="bg-[#123A63]/5 rounded-sm p-6 mb-6">
<div class="flex gap-3"><svg class="h-5 w-5 text-[#123A63] flex-shrink-0 mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Info&quot;)"></use></svg>
<div>
<h3 class="font-semibold text-[#123A63] mb-2">What happens after submission?</h3>
<ul class="space-y-2 text-sm text-[#667085]">
<li>• You will receive a confirmation email with your application reference number</li>
<li>• Our team will review your interest within 2-3 business days</li>
<li>• A case manager will be assigned to your application</li>
<li>• You will be contacted to schedule an initial consultation</li>
<li>• You can track your application status in the Investor Portal</li></ul></div></div></div>
<div class="space-y-4">
<div class="flex items-start gap-3"><input id="agreeContact" :checked="formData.agreeContact" @change="(checked =&gt; updateField(&quot;agreeContact&quot;, checked))($event.target.checked)" type="checkbox" class="size-4 shrink-0 rounded border border-input accent-[#123A63]"><label for="agreeContact" class="cursor-pointer">I agree to be contacted by the Panjakent investment support team regarding my investment interest. </label></div>
<div class="flex items-start gap-3"><input id="confirmAccurate" :checked="formData.confirmAccurate" @change="(checked =&gt; updateField(&quot;confirmAccurate&quot;, checked))($event.target.checked)" type="checkbox" class="size-4 shrink-0 rounded border border-input accent-[#123A63]"><label for="confirmAccurate" class="cursor-pointer">I confirm that the provided information is accurate and complete to the best of my knowledge. </label></div></div></div></template>
<div class="flex justify-between mt-8 pt-6 border-t border-gray-200"><x-button type="button" x-on:click="(handleBack)($event)" ::disabled="currentStep === 1" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 has-[>svg]:px-3">Back </x-button>
<template x-if="Boolean(currentStep &lt; 4)"><x-button type="button" x-on:click="(handleNext)($event)" ::disabled="!canProceed()" class="text-primary-foreground h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 has-[>svg]:px-3">Continue </x-button></template>
<template x-if="Boolean(!(currentStep &lt; 4))"><x-button type="button" x-on:click="(handleSubmit)($event)" ::disabled="!canProceed()" class="text-primary-foreground h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 has-[>svg]:px-3">Submit Interest </x-button></template></div></div>
<div class="hidden lg:block fixed right-8 top-1/4 w-64">
<div class="bg-white rounded-sm  border border-gray-200 p-6">
<h3 class="font-semibold text-[#1F2933] mb-4">Need Help?</h3>
<div class="space-y-3 text-sm text-[#667085]"><p>Contact our investor support team:</p>
<div><p class="font-medium text-[#1F2933]">Hotline:</p><p>+992 xxx xxx xxx</p></div>
<div><p class="font-medium text-[#1F2933]">Email:</p><p>invest@panjakent.tj</p></div>
<div><p class="font-medium text-[#1F2933]">WhatsApp:</p><p>+992 xxx xxx xxx</p></div></div></div></div></div></div>
</div>
@endsection
