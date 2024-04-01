<script lang="ts">
	import { IconLanguage } from '@tabler/icons-svelte';
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { _, locale } from 'svelte-i18n';

	let currentLocale: string = 'en';
	const locales = ['en', 'de', 'jp', 'vn'];

	function handleLocaleChange(newLocale: string) {
		currentLocale = newLocale;
		$locale = currentLocale;
	}
</script>

<Button class="text-black-primary dark:text-white-primary font-semibold"
	>{$_(`locale-switch.languages.${currentLocale}`)}
	<IconLanguage class="w-6 h-6 ms-2 text-slate-800 dark:text-white" /></Button
>
<Dropdown>
	{#each locales as loc}
		<DropdownItem
			class={currentLocale === loc ? 'bg-green-100' : ''}
			on:click={() => handleLocaleChange(loc)}
		>
			{$_(`locale-switch.languages.${loc}`)}
		</DropdownItem>
	{/each}
</Dropdown>
