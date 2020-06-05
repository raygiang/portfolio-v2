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
		<a class="header__name" aria-label="Home Link" href=".">
			<span>Raymond Giang</span>
		</a>
		
		<nav class="header__main-nav">
			<ul>
				<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.' on:click={resetMenu}>Home</a></li>
				<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about' on:click={resetMenu}>About Me</a></li>
				<li><a rel=prefetch aria-current='{segment === "projects" ? "page" : undefined}' href='projects' on:click={resetMenu}>Projects</a></li>
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
					<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.' on:click={resetMenu}>Home</a></li>
					<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about' on:click={resetMenu}>About Me</a></li>
					<li><a rel=prefetch aria-current='{segment === "projects" ? "page" : undefined}' href='projects' on:click={resetMenu}>Projects</a></li>
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
		background-color: $primary-color;
		padding: 0.5rem 0;
		position: relative;

		&__wrapper {
			display: flex;
			padding: 0 1rem;
			justify-content: space-between;
		}

		a {
			text-decoration: none;
			color: #FFF;
			
			&[aria-current] {
				color: $accent-color;
			}

			&:hover {
				color: $link-color;
			}
		}

		&__name {
			font-size: 22px;
		}

		&__main-nav {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			
			ul {
				display: flex;

				li {
					list-style: none;
					margin: auto 0 auto 1rem;
					font-size: 18px;
					
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
			height: max-content;
			margin: auto 0;
			padding: 0.25rem 0.5rem;
			background-color: transparent;
			border: none;
			transition: 0.3s all;
			cursor: pointer;

			:global(svg) {
				font-size: 20px;
				color: #FFF;

				&:hover {
					color: $accent-color;
				}
			}
		}

		@media screen and (max-width: 768px) {
			&__main-nav {
				display: none;
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
				height: calc(100vh - #{$header-height});
				background-color: $primary-color;

				ul {
					list-style: none;
					margin: auto;
					padding: 1rem;

					li {
						margin-bottom: 1rem;

						a {
							color: #FFF;
							text-decoration: none;
							font-weight: bold;
							font-size: 20px;
							transition: 0.5s all;

							&:hover {
								color: $accent-color;
							}
						}

						&:last-child {
							margin-bottom: 0;
						}
					}
				}
			}
		}
	}
</style>
