<script>
    import { fade } from 'svelte/transition';
    import { onMount, afterUpdate } from 'svelte';

    let duration = 500;
    let delay = 500;
    let showGame = false;
    let mounted;

    let canvas;
    let context;
    let patternReference;
    let pattern;

    const initSplashCanvas = () => {
        canvas = document.querySelector('.splash-canvas');
        canvas.width = 860;
        canvas.height = 500;
        context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    const toggleGame = () => {
        showGame = !showGame;
        if(!showGame) {
            setTimeout(() => {
                initSplashCanvas();
            }, 500);
        }
    }

    onMount(() => {
        setTimeout(() => {
            initSplashCanvas();
            mounted = true;
        }, delay);
    });
</script>

{#if showGame}
    <iframe
        class="game-frame"
        src="https://portfolio-game.raymondgiang.com"
        frameborder="0"
        title="Portfolio Game"
    />
{:else}
    <canvas class="splash-canvas"></canvas>
{/if}

<style lang="scss">
    @import '../../style/theme.scss';

    .game-frame {
        width: 100%;
        height: 100%;
        display: block;

        @media screen and (max-width: 2000px) {
            min-height: calc(100vh - #{$header-height} - #{$footer-height});
        }

        @media screen and (max-width: 768px) {
            height: auto;
        }
    }

    .splash-canvas {
        display: block;
        background: #000;
        max-height: calc(100vh - #{$header-height} - #{$footer-height});
        width: 100%;
        margin: auto 0;
    }
</style>