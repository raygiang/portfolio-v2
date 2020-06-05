<script>
    import { onMount, afterUpdate } from 'svelte';
    import Swiper from 'swiper';
    import "swiper/css/swiper.min.css";

    export let currentIndex;
    export let projectScreens;
    export let projectSlug;

    let swiper;

    onMount(() => {
        swiper = new Swiper('.ss-slider', {
            speed: 300,
            spaceBetween: 20,
            slidesPerView: 'auto',
            centeredSlides: true,
            slideToClickedSlide: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            grabCursor: true,
            updateOnWindowResize: true,
        });

        swiper.on('slideChange', () => {
            currentIndex = swiper.realIndex;
        });

        swiper.currProj = projectSlug;
    });

    afterUpdate(() => {
        if(swiper.currProj !== projectSlug) {
            swiper.slideTo(0);
            swiper.update();
            swiper.currProj = projectSlug;
        }
    })
</script>

<div class="ss-slider">
    <div class="swiper-wrapper">
        {#each projectScreens as screenshot, index}
            <div class="ss-slider__image-container swiper-slide">
                <img src="{projectSlug + '/' + screenshot}" alt="screenshot number {index + 1}">
            </div>
        {/each}
    </div>
    <div class="swiper-pagination"></div>
</div>

<style lang="scss">
    @import '../../style/theme.scss';

    .ss-slider {
        overflow: hidden;
        width: 100%;
        padding: 1rem 0 1.5rem;
        margin: 0 1rem;

        &__image-container {
            @include image-container;
            max-height: 100px;
            background: #FFF;
            width: 160px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
    }
</style>
