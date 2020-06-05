<script>
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';

	let duration = 1000;
	let delay = 1100;
	let mounted;

	onMount(() => {
		mounted = true;

		setTimeout(() => {
			document.querySelectorAll('.d-pad').forEach((path) => {
                path.style.fill = '#000';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
			});
            document.querySelectorAll('#d-pad path').forEach((path) => {
                path.style.stroke = 'transparent';
            });
		}, duration + delay);
	});
</script>

{#if mounted}
	<svg version="1.1" id="d-pad" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 200 200" xml:space="preserve">
		<path in:draw="{{duration, delay}}" class="d-pad"
			d="M190,73v54c0,9.9-8.1,18-18,18h-27v27c0,9.9-8.1,18-18,18H73c-9.9,0-18-8.1-18-18v-27H28c-9.9,0-18-8.1-18-18
			V73c0-9.9,8.1-18,18-18h27V28c0-9.9,8.1-18,18-18h54c9.9,0,18,8.1,18,18v27h27C181.9,55,190,63.1,190,73z"
		/>
	</svg>
{/if}


<style lang="scss">
    svg {
		margin: auto;
		width: 50%;
    }

	path {
		stroke: #000;
		fill: transparent;
		transition: 1.5s;
	}
</style>
