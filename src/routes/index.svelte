<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import SplashCanvas from '../components/home/SplashCanvas.svelte';
	let mounted;

	onMount(() => mounted = true);
</script>

<svelte:head>
	<title>Raymond Giang - Portfolio</title>
</svelte:head>

{#if mounted}
	<section class="home" in:fade={{ duration: 500 }}>
		<SplashCanvas />
	</section>
{:else}
	<section class="home"></section>
{/if}

<style lang="scss">
	@import '../../style/theme.scss';

	.home {
		display: flex;
		background-image: linear-gradient(to bottom right, #133E53, #287EA9);
		
		@media screen and (max-width: 2000px) {
			min-height: calc(100vh - #{$header-height} - #{$footer-height});
		}

		@media screen and (max-width: 768px) {
			min-height: calc(100vh - #{$mobile-header-height} - #{$footer-height});
		}
	}
</style>