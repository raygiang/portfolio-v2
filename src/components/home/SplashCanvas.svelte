<script>
    import { fade } from 'svelte/transition';
    import { onMount, afterUpdate } from 'svelte';

    let showGame = false;
    let mounted;

    const toggleGame = () => {
        showGame = !showGame;
        if(!showGame) {
            setTimeout(() => {
                initSplashCanvas();
            }, 500);
        }
    }

    onMount(() => {
        mounted = true;
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
    <div class="splash">
        <div class="light-container">
            {#each Array(50) as _}
                 <div class="light"></div>
            {/each}
        </div>
        <div class="silhouette-container" aira-hidden="true"></div>
        <div class="intro">
            <h1 class="heading">
                <span>Hey there!</span>
                <span>My name is Raymond.</span>
                <span>I make websites and games.</span>
            </h1>
            <button class="play-button" on:click={toggleGame}>Play Game</button>
        </div>
    </div>
{/if}

<style lang="scss">
    @import '../../style/theme.scss';

    .game-frame, .splash, .silhouette-container, .light-container {
        width: 100%;
        height: 100%;
        display: block;

        @media screen and (max-width: 2000px) {
            min-height: calc(100vh - #{$header-height} - #{$footer-height});
        }

        @media screen and (max-width: 768px) {
            height: auto;
			min-height: calc(100vh - #{$mobile-header-height} - #{$footer-height});
        }
    }

    .splash {
        position: relative;

        .silhouette-container, .light-container {
            position: absolute;
            top: 0;
            left: 0;
        }

        .silhouette-container {
            background-image: url('../toronto-silhouette.png');
            background-position: center bottom;
            background-size: cover;
        }
        
        .light-container {
            $numLights: 50;
            overflow: hidden;

            .light {
                position: absolute;
                border-radius: 50%;
                
                @for $i from 1 through $numLights {
                    &:nth-child(#{$i}) {
                        $lightDiameter: random(5) + px;
                        $lightColour: random(360);
                        $bottomPos: percentage(random(10) / 100);
                        $leftPos: percentage(random());
                        $flickerDuration: random(3) + s;
                        $animationDuration: random(50) + 20s;
                        $flickerDuration: random(3) + 2s;

                        width: $lightDiameter;
                        height: $lightDiameter;
                        bottom: $bottomPos;
                        left: $leftPos;
                        animation: flicker-#{$i} $flickerDuration ease infinite,
                                   float-#{$i} $animationDuration linear infinite;

                        @keyframes float-#{$i} {
                            from {
                                bottom: $bottomPos;
                            }
                            to {
                                bottom: 105%;
                            }
                        }

                        @keyframes flicker-#{$i} {
                            0% {
                                box-shadow: 0 0 3px hsla(0, 0%, 100%, 0.5);
                                background-color: hsla(0, 0%, 100%, 0.3);
                            }
                            50% {
                                box-shadow: 0 0 8px hsla($lightColour, 50%, 50%, 0.7);
                                background-color: hsla($lightColour, 50%, 50%, 0.3);
                            }
                            100% {
                                box-shadow: 0 0 3px hsla(0, 0%, 100%, 0.5);
                                background-color: hsla(0, 0%, 100%, 0.3);
                            }
                        }
                    }
                }
            }
        }

        .intro {
            position: absolute;
            left: 30px;
            top: 15%;
            display: flex;
            flex-direction: column;

            .heading {
                display: flex;
                flex-direction: column;
                font-size: 35px;
                font-weight: bold;
                color: #FFF;
                text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
            }

            .play-button {
                @include primary-button;
                margin-top: 1rem;
                width: max-content;
            }
        }

        @media screen and (max-width: 500px) {
            .intro {
                .heading {
                    font-size: 25px;
                }

                .play-button {
                    display: none;
                }
            }
        }
    }
</style>