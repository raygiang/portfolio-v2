<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Card from '../../components/projects/Card.svelte';

	export let projects;
	let mounted;

	onMount(() => mounted = true);
</script>

<svelte:head>
	<title>Raymond Giang - Projects</title>
</svelte:head>

{#if mounted}
	<section class="projects" in:fade="{{duration: 500}}">
		<div class="projects__wrapper page-wrapper">
			<h1 class="projects__heading">Featured Projects</h1>
			<div class="projects__projects-container">
				{#each projects as project}
					<Card project={project} />
				{/each}
			</div>
		</div>
	</section>
{:else}
	<section class='projects'></section>
{/if}

<style lang="scss">
	@import '../style/theme.scss';

	.projects {
		background-color: $background-color;

		&__heading {
			text-align: center;
			padding: 0.5rem 0;
			@include ribbon-heading;
		}

		&__wrapper {
			padding: 2rem 3rem;
			display: flex;
			flex-flow: row wrap;
		}

		&__projects-container {
			flex: 100%;
			display: grid;
			grid-template-columns: 23% 23% 23% 23%;
			grid-column-gap: 2.66%;
			grid-row-gap: 1rem;
		}

		@media screen and (max-width: 2000px) {
			min-height: calc(100vh - #{$header-height} - #{$footer-height});
		}

		@media screen and (max-width: 1100px) {
			&__projects-container {
				grid-template-columns: 32% 32% 32%;
				grid-column-gap: 2%;
			}	
		}

		@media screen and (max-width: 768px) {			
			&__projects-container {
				grid-template-columns: 49% 49%;
			}	
		}

		@media screen and (max-width: 500px) {
			&__wrapper {
				padding: 2rem 1.5rem;
			}

			&__projects-container {
				grid-template-columns: 100%;
				grid-column-gap: 0;
			}	
		}
	}
</style>
