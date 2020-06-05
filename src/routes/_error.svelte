<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<section class="error">
	<div class="error__wrapper page-wrapper">
		<div class="error__error-container">
			<h1>{status}</h1>

			<p>{error.message}</p>

			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	@import '../style/theme.scss';

	.error {
		height: calc(100vh - #{$header-height} - #{$footer-height});
		max-height: 750px;
		background-image: url("../background.png");
		@include background-image;
		display: flex;

		&__wrapper {
			padding: 1rem;
			display: flex;
			flex: 100%;
		}

		&__error-container {
			background-color: rgba(0, 0, 0, 0.7);
			border-radius: 25px;
			max-width: 75%;
			padding: 2rem;
			margin: auto;
			color: #FFF;
			display: flex;
			flex-direction: column;
			justify-content: center;

			h1 {
				font-size: 35px;
				text-align: center;
			}
		}
	}
</style>