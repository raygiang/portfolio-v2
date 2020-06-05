<script>
	import Background from '../components/home/Background.svelte';
	import DPad from '../components/home/DPad.svelte';
	import GameButtons from '../components/home/GameButtons.svelte';
	import SplashCanvas from '../components/home/SplashCanvas.svelte';
</script>

<svelte:head>
	<title>Raymond Giang - Portfolio</title>
</svelte:head>

<section class="home">
	<div class="home__banner">
		<div class="home__wrapper page-wrapper">
			<Background />
			<div class="home__d-pad-container">
				<DPad />
			</div>
			<div class="home__canvas-container">
				<SplashCanvas />
			</div>
			<div class="home__button-container">
				<GameButtons />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../style/theme.scss';

	.home {
		&__banner {
			height: calc(100vh - #{$header-height} - #{$footer-height});
			max-height: 750px;
			position: relative;
			overflow: hidden;
		}

		&__wrapper {
			height: 100%;
			display: flex;
		}

		&__canvas-container {
			flex: 60%;
			max-width: 60%;
			height: 100%;
			display: flex;
		}

		&__button-container, &__d-pad-container {
			flex: 20%;
			max-width: 20%;
			display: flex;
		}

		@media screen and (max-width: 768px) {
			&__canvas-container {
				flex: 100%;
				max-width: 100%;
				padding: 1rem;
			}

			&__button-container, &__d-pad-container {
				display: none;
			}
		}
	}
</style>