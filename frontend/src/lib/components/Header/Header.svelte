<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LanguageDropDownButton from '../Buttons/LanguageDropDownButton.svelte';
	import Logo from '../Icons/Logo.svelte';

	export let y: any;

	let tabs = [
		{ name: 'about', link: '/about' },
		{ name: 'support', link: '/support' },
		{ name: 'blog', link: '/blog' },
		{ name: 'login', link: '/login' }
	];
</script>

<header
	class={'sticky z-[20] top-0 duration-200 px-6 flex items-center justify-between border border-solid text-black-primary ' +
		(y > 0 ? 'py-4 bg-white-primary border-b-2 border-b-primary-0' : 'py-6 bg-white-primary border-transparent')}
>
	<div class="flex items-center">
		<Logo width="25" height="25" foreground="black"/>
		<h1 class="font-medium">
			<b class="font-bold">is-my-coffee-cold</b>
		</h1>
	</div>
	<div class="sm:flex items-center gap-4 hidden">
		{#each tabs as tab}
			{#if tab.name !== 'login'}
				<a href={tab.link} class="duration-200 hover:text-emerald-600 font-semibold text-slate-800">
					<p>{$_(`sections.${tab.name}`)}</p>
				</a>
			{/if}
		{/each}
	</div>
	<LanguageDropDownButton />
</header>

<style>
	* {
		font-family: 'PT Sans', sans-serif;
	}
</style>
