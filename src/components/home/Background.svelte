<script>
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';

	let duration = 1000;
	let delay = 100;
	let mounted;

	onMount(() => {
		mounted = true;

		setTimeout(() => {
            document.querySelector('#background').style.backgroundColor = "#00B7F4";
			document.querySelectorAll('.segment-1').forEach((path) => {
                path.style.fill = '#5EAEFF';
			});
			document.querySelectorAll('.segment-2').forEach((path) => {
                path.style.fill = '#0066CC';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
            });
            document.querySelectorAll('.segment-3').forEach((path) => {
                path.style.fill = '#00D2D2';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
            });
            document.querySelectorAll('.segment-4').forEach((path) => {
                path.style.fill = '#9ECFFF';
                path.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, .7))';
			})
            document.querySelectorAll('#background path').forEach((path) => {
                path.style.stroke = 'transparent';
            });
		}, duration + delay);
	});
</script>

<!-- <div class="banner-background" aria-hidden="true"> -->
	<svg id="background" data-name="background" xmlns="http://www.w3.org/2000/svg" viewBox="10 10 1380 630" perserveAspectRatio="xMidYMid meet">
        {#if mounted}
            <g>
                <path in:draw="{{duration, delay}}" class="segment-1" d="M620.84,0,573.69,61.73,331.51,378.8,124.37,650H0V0Z" transform="translate(0.5 0.5)"/>
                <polygon class="segment-2" points="0.5 649.5 0.5 506.41 386.92 0.5 1220.98 0.5 914.11 402.25 876.6 451.37 725.26 649.5 0.5 649.5"/>
                <path in:draw="{{duration, delay}}" d="M1220,1l-70.21,91.92-236,309-37.51,49.12L725,649H1V506.58L199.54,246.64,387.16,1H1220m2-1H386.67L198.75,246,0,506.24V650H725.51L877,451.67l37.51-49.12,236-309L1222,0Z" transform="translate(0)"/>
                <path in:draw="{{duration, delay}}" class="segment-3" d="M1162,650H602.72L331.51,378.8,198.75,246,0,47.29V0H512Z" transform="translate(0.5 0.5)"/>
                <path in:draw="{{duration, delay}}" class="segment-4" d="M1400,0V650h-16.14L1150.55,93.53,1111.33,0Z" transform="translate(0.5 0.5)"/>
                <!-- <path in:draw="{{duration, delay}}" class="controls" d="M250,295v60a20,20,0,0,1-20,20H200v30a20,20,0,0,1-20,20H120a20,20,0,0,1-20-20V375H70a20,20,0,0,1-20-20V295a20,20,0,0,1,20-20h30V245a20,20,0,0,1,20-20h60a20,20,0,0,1,20,20v30h30A20,20,0,0,1,250,295Z" transform="translate(0.5 0.5)"/> -->
                <!-- <path in:draw="{{duration, delay}}" class="controls" d="M1225.25,324.75a25,25,0,1,1-25-25A25,25,0,0,1,1225.25,324.75Zm25.5,23.5a25,25,0,1,0,25,25A25,25,0,0,0,1250.75,348.25Zm-1.5-96.5a25,25,0,1,0,25,25A25,25,0,0,0,1249.25,251.75Zm50.5,48.5a25,25,0,1,0,25,25A25,25,0,0,0,1299.75,300.25Z" transform="translate(0.5 0.5)"/> -->
            </g>
        {/if}
    </svg>
<!-- </div> -->

<style lang="scss">
    #background {
        position: absolute;
        width: auto;
        height: 100%;
        min-height: 100vh;
        top: 0;
        left: 0;
        z-index: -1;
    }

    svg {
        transition: 1.5s;
    }
    
    polygon {
        fill: transparent;
        transition: 1.5s;
    }

	path {
		stroke: #000;
		fill: transparent;
		transition: 1.5s;
	}
</style>
