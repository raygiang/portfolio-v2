<script>
    import { fade } from 'svelte/transition';
    import { onMount, afterUpdate } from 'svelte';

    let duration = 500;
    let delay = 1500;
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
        patternReference = document.querySelector('#background-image');
        pattern = context.createPattern(patternReference, 'repeat');
        context.font = 'bold 4.5rem "Helvetica"';
        context.fillStyle = pattern;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillText('Hey there!', 30, 125);
        context.fillText('My Name Is Raymond.', 30, 225);
        context.fillText('I Make Websites', 30, 325);
        context.fillText('and Games.', 30, 425);
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
            // initSplashCanvas();
            mounted = true;
        }, delay);
    });
</script>

{#if mounted}
    <div class="splash-container">
        <img id="background-image" src="background.png" alt="text texture">
        <!-- {#if showGame} -->
            <iframe
                in:fade={{duration, delay}}
                class="game-frame"
                src="https://portfolio-game.raymondgiang.com"
                frameborder="0"
                title="Portfolio Game"
            />
        <!-- {:else}
            <canvas class="splash-canvas" in:fade={{duration, delay}}>
                Please enable JavaScript to View Content
            </canvas>
        {/if} -->

        <!-- <button class="game-toggle" on:click={toggleGame}>{showGame ? 'Hide' : 'Play'}</button> -->
    </div>
{/if}

<style lang="scss">
    @import '../../style/theme.scss';

    .splash-container {
        margin: auto;
        width: 100%;
        height: 100%;
        max-height: 380px;
        background-color: rgba(0, 0, 0, 1);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
        display: flex;
        flex-flow: row wrap;

        #background-image {
            display: none;
        }

        iframe {
            width: 100%;
            height: 100%;
        }

        // .game-toggle {
        //     @include primary-button;
        //     margin: 1rem auto;
        // }

        // @media screen and (max-width: 768px) {
        //     .game-toggle {
        //         display: none;
        //     }
        // }

        @media screen and (max-width: 600px) {
            max-height: 250px;
        }
    }
</style>