<script>
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';

	let duration = 1000;
	let delay = 1100;
	let mounted;

	onMount(() => {
		mounted = true;

		setTimeout(() => {
			document.querySelectorAll('.buttons-path-1').forEach((path) => {
                path.style.fill = 'green';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
            });
            document.querySelectorAll('.buttons-path-2').forEach((path) => {
                path.style.fill = 'blue';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
            });
                document.querySelectorAll('.buttons-path-3').forEach((path) => {
                path.style.fill = 'yellow';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
            });
                document.querySelectorAll('.buttons-path-4').forEach((path) => {
                path.style.fill = 'red';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
			});
            document.querySelectorAll('#game-buttons path').forEach((path) => {
                path.style.stroke = 'transparent';
            });
		}, duration + delay);
	});
</script>

{#if mounted}
    <svg version="1.1" id="game-buttons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	    viewBox="0 0 200 200" xml:space="preserve">
        <path in:draw="{{duration, delay}}" class="buttons-path-1" d="M67.9,59c0,17.4-14.1,31.5-31.5,31.5S5,76.4,5,59s14.1-31.5,31.5-31.5S67.9,41.6,67.9,59z"/>
        <path in:draw="{{duration, delay}}" class="buttons-path-2" d="M162.3,59c0,17.4-14.1,31.5-31.5,31.5S99.4,76.4,99.4,59s14.1-31.5,31.5-31.5S162.3,41.6,162.3,59z"/>
        <path in:draw="{{duration, delay}}" class="buttons-path-3" d="M100.6,141c0,17.4-14.1,31.5-31.5,31.5S37.7,158.4,37.7,141s14.1-31.5,31.5-31.5S100.6,123.6,100.6,141z"/>
        <path in:draw="{{duration, delay}}" class="buttons-path-4" d="M195,141c0,17.4-14.1,31.5-31.5,31.5s-31.5-14.1-31.5-31.5s14.1-31.5,31.5-31.5S195,123.6,195,141z"/>
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
