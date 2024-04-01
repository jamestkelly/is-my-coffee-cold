<script lang="ts">
	import {
		Footer,
		FooterIcon,
		FooterLink,
		FooterLinkGroup
	} from 'flowbite-svelte';
	import { DiscordSolid, GithubSolid } from 'flowbite-svelte-icons';
	import { _ } from 'svelte-i18n';
	import Logo from '../Icons/Logo.svelte';
</script>

<Footer footerType="socialmedia" class="bg-secondary-2 border-t border-t-tertiary-1 absolute bottom-0 start-0 w-full">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0 flex">
			<Logo height="50" width="60" foreground="black" />
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-black-primary uppercase dark:text-white">
					{$_(`footer.gettingStarted.title`)}
				</h2>
				<FooterLinkGroup ulClass="text-black-primary">
					<FooterLink liClass="mb-4" href="/">{$_(`footer.gettingStarted.about`)}</FooterLink>
					<FooterLink liClass="mb-4" href="/">{$_(`footer.gettingStarted.register`)}</FooterLink>
					<FooterLink liClass="mb-4" href="/">{$_(`footer.gettingStarted.login`)}</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-black-primary dark:text-white">
					{$_(`footer.support.title`)}
				</h2>
				<FooterLinkGroup ulClass="text-black-primary">
					<FooterLink liClass="mb-4" href="/">{$_(`footer.support.documentation`)}</FooterLink>
					<FooterLink liClass="mb-4" href="/">{$_(`footer.support.issues`)}</FooterLink>
					<FooterLink liClass="mb-4" href="/">{$_(`footer.support.community`)}</FooterLink>
					<FooterLink liClass="mb-4" href="/">{$_(`footer.support.demo`)}</FooterLink>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-tertiary-1 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<p class="text-black">{$_(`footer.copyright`)}</p>
		<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
			<FooterIcon href="/">
				<DiscordSolid
					class="w-4 h-4 text-black-primary dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<GithubSolid
					class="w-4 h-4 text-black-primary dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
