<script lang="ts">
  import CoffeeCup from '$lib/components/Models/CoffeeCup.svelte';
  import { Canvas } from '@threlte/core';
  import { _ } from 'svelte-i18n';
</script>

<section class="bg-white-primary dark:bg-gray-900">
  <div class="m-4 bg-primary-0 rounded-2xl grid h-full max-w-screen-xl w-5/6 px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="mr-auto place-self-center lg:col-span-7">
      <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white-primary dark:text-white">
        {$_(`hero.title`)}
      </h1>
      <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
        {$_(`hero.description`)}
      </p>
      <div class="flex flex-1 justify-left pl-10">
        {$_(`hero.register`)}
      </div>
    </div>
    <div class="z-1 hidden lg:mt-0 lg:col-span-5 top-0 lg:flex">
      <Canvas>
        <CoffeeCup />
      </Canvas>      
    </div>
  </div>
</section>

