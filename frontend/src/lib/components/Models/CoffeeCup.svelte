<script lang="ts">
	import { T, useLoader, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { Spinner } from 'flowbite-svelte';
	import { spring } from 'svelte/motion';
	import { Group } from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	interactivity();

	export const ref = new Group();
	const gltf = useLoader(GLTFLoader).load('assets/coffee.glb');
	const scale = spring(1.75);
	let rotationY = 0;
	useTask((delta) => {
		rotationY += delta / 2;
	});
</script>

{#if $gltf}
	<T.PerspectiveCamera
		makeDefault
		position={[5, -0.5, 5]}
		fov={15}
		on:create={({ ref }) => {
			ref.lookAt(0, 1, 0);
		}}
	/>

	<T.DirectionalLight position={[0, -1, 10]} />

	<T
		is={$gltf.scene}
		position.y={1.5}
		position.x={-0.5}
		position.z={-0.5}
		scale={$scale}
		rotation.y={rotationY}
		on:pointerenter={() => scale.set(1.25)}
		on:pointerleave={() => scale.set(1.75)}
	/>
{:else}
	<Spinner color="green" size={10}/>
{/if}
