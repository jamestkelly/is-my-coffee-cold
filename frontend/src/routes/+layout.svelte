<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import '$lib/i18n';
	import { isLocaleLoaded } from '$lib/i18n';
	import { Spinner } from 'flowbite-svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import '../app.css';

	let y: any;
	let innerHeight = 0;
	let innerWidth = 0;
	function scrollToTop() {
		document.body.scrollIntoView();
	}
</script>

<MetaTags
	title="is-my-coffee-cold"
	description="Calculate how long until your coffee goes cold."
	canonical="https://www.is-my-coffee-cold.web.app"
	keywords={["coffee", "temperature", "calculate"]}
/>

<div class="bg-white-primary relative flex flex-col mx-auto w-full h-full text-sm sm:text-base min-h-screen">
	{#if $isLocaleLoaded}
		<div
			class={'fixed bottom-0 w-full duration-200 flex p-10 z-[10] ' +
				(y > 0 ? 'opacity-full pointer-events-auto' : 'opacity-0 point-events-none')}
		>
			<button
				on:click={scrollToTop}
				class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"
			>
				<i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
			</button>
		</div>
		<Header {y} />
		<slot />
		<Footer />
	{:else}
    <div class="h-screen flex items-center justify-center"><Spinner color="green" size={20}/></div>
	{/if}
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
