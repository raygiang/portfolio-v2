<script>
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import { bars, times } from 'svelte-awesome/icons';
	import { fly } from 'svelte/transition';
	import ScrollController from '../utils/scrollFunctions.js';

	export let segment;
	let showMenu = false;
	let scrollController;

	onMount(() => {
		scrollController = new ScrollController(document);
	});

	const toggleMenu = () => {
		showMenu = !showMenu;
		if(showMenu) { scrollController.disableScroll() }
		else { scrollController.enableScroll() }
	}

	const resetMenu = () => {
		showMenu = false;
		scrollController.enableScroll()
	}
</script>

<header class="header">
	<div class="header__wrapper page-wrapper">
		<div class="header__name-container">
			<a class="header__name header__nav-link" aria-label="Home Link" href=".">
				Raymond Giang
			</a>
		</div>
		
		<nav class="header__main-nav">
			<ul>
				<li><a class="header__nav-link" aria-current='{segment === undefined ? "page" : undefined}' href='.' on:click={resetMenu}>Home</a></li>
				<li><a class="header__nav-link" aria-current='{segment === "about" ? "page" : undefined}' href='about' on:click={resetMenu}>About Me</a></li>
				<li><a class="header__nav-link" rel=prefetch aria-current='{segment === "projects" ? "page" : undefined}' href='projects' on:click={resetMenu}>Projects</a></li>
			</ul>
		</nav>
		<button class="header__hamburger-container" on:click={toggleMenu}>
			{#if !showMenu}
				<Icon data={bars} />
			{:else}
				<Icon data={times} />
			{/if}
		</button>
		{#if showMenu}
			<nav class="header__mobile-nav" transition:fly={{x: 768, duration: 500}}>
				<ul>
					<li><a class="header__nav-link" aria-current='{segment === undefined ? "page" : undefined}' href='.' on:click={resetMenu}>Home</a></li>
					<li><a class="header__nav-link" aria-current='{segment === "about" ? "page" : undefined}' href='about' on:click={resetMenu}>About Me</a></li>
					<li><a class="header__nav-link" rel=prefetch aria-current='{segment === "projects" ? "page" : undefined}' href='projects' on:click={resetMenu}>Projects</a></li>
				</ul>
			</nav>
		{/if}
	</div>
</header>

<style lang="scss">
	@import "../../style/theme.scss";

	.header {
		display: flex;
		height: $header-height;
		padding: 0.5rem 0 1rem;
		position: relative;
		box-shadow: 0 0 12px -8px rgba(0, 0, 0, 0.8);

		&__wrapper {
			display: flex;
			flex-direction: column;
			padding: 0 1rem;
			justify-content: space-between;
		}

		&__nav-link {
			text-decoration: none;
			color: #000;
			
			&[aria-current] {
				position: relative;

				&:after {
					display: block;
					content: '';
					position: absolute;
					bottom: -3px;
					width: 100%;
					height: 3px;
					background-color: $primary-color;
				}
			}

			&:hover {
				color: $accent-color;
			}
		}

		&__name-container {
			display: flex;
		}

		&__name {
			font-size: 35px;
			font-family: $heading-font;
			margin: 0 auto;
			letter-spacing: 3px;
			text-transform: uppercase;
		}

		&__main-nav {
			display: flex;
			justify-content: center;
			
			ul {
				display: flex;

				li {
					list-style: none;
					margin: auto 0 auto 2rem;
					font-size: 18px;
					text-transform: uppercase;
					
					&:first-child {
						margin-left: 0;
					}
				}
			}
		}

		&__mobile-nav {
			display: none;
			z-index: 10;
		}

		&__hamburger-container {
			display: none;
			margin: auto 0;
			background-color: transparent;
			border: none;
			transition: 0.3s all;
			cursor: pointer;
			height: 25px;
			width: 25px;

			:global(svg) {
				font-size: 25px;
				color: #000;
				width: 100%;
				height: 100%;

				&:hover {
					color: $accent-color;
				}
			}
		}

		@media screen and (max-width: 768px) {
			height: $mobile-header-height;
			padding: 0.5rem 0;

			&__wrapper {
				flex-direction: row;
			}

			&__name-container {
				margin: auto 0;
			}

			&__name {
				font-size: 25px;
				font-family: $heading-font;
				margin: 0 auto;
			}

			&__main-nav {
				display: none;
			}

			&__nav-link {
				&:not(.header__name) {
					color: #FFF;
				}
			}

			&__hamburger-container {
				display: flex;
			}

			&__mobile-nav {
				display: flex;
				position: absolute;
				left: 0;
				top: 100%;
				width: 100%;
				height: calc(100vh - #{$mobile-header-height});
				background-color: $secondary-color;

				ul {
					list-style: none;
					margin: auto;
					padding: 1rem;

					li {
						margin-bottom: 1rem;
						text-transform: uppercase;
						font-size: 25px;

						&:last-child {
							margin-bottom: 0;
						}
					}
				}
			}
		}
	}
</style>
