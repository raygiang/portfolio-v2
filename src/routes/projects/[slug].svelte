<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`projects/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import { beforeUpdate } from 'svelte';
	import ScreenshotSlider from '../../components/project/ScreenshotSlider.svelte';
	import Icon from 'svelte-awesome';
	import { globe, github } from 'svelte-awesome/icons';

	export let project;
	export let currentIndex = 0;
	let projectScreens;

	beforeUpdate(() => {
		if(project && project.metadata.screenshots) {
			projectScreens = JSON.parse(project.metadata.screenshots);
		}
	});
</script>

<svelte:head>
	<title>Raymond Giang - {project.metadata.title}</title>
</svelte:head>

<section class='project' in:fade="{{duration: 500}}">
	<div class="project__wrapper page-wrapper">
		<div class="project__project-container">
			<div class="project__details-section">
				<div class="project__title-container">
					<h1>{project.metadata.title}</h1>
				</div>
				<div class="project__description-container">
					{@html project.html}
				</div>
				<div class="project__links">
					{#if project.metadata.link}
							<a href="{project.metadata.link}" title="Live Link" target="_blank" rel="nofollow noreferrer">
								Live Link
							</a>
					{/if}
					{#if project.metadata.github}
							<a href="{project.metadata.github}" title="Github Link" target="_blank" rel="nofollow noreferrer">
								View on GitHub
							</a>
					{/if}
				</div>
			</div>
			<div class="project__screenshot-section">
				{#if projectScreens}
					<div class="project__screenshot-container">
						<img src="{project.slug}/{projectScreens[currentIndex]}" alt="screenshot of {project.metadata.title} currently being viewed">
					</div>

					<ScreenshotSlider bind:currentIndex projectScreens={projectScreens} projectSlug={project.slug} />
				{/if}
			</div>
		</div>
		<div class="project__project-nav">
			<a rel=prefetch href="/projects/{project.prevSlug}" class="project__previous-link">Previous Project</a>
			<a rel=prefetch href="/projects" class="project__list-link">Back to List</a>
			<a rel=prefetch href="/projects/{project.nextSlug}" class="project__next-link">Next Project</a>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../style/theme.scss';

	.project {
		display: flex;

		&__wrapper {
			display: flex;
			flex-direction: column;
			padding: 1rem;
		}

		&__project-container {
			display: flex;
			height: 100%;
		}

		&__details-section {
			flex: 35%;
			display: flex;
			flex-direction: column;
			padding: 1rem 0;
		}

		&__screenshot-section {
			flex: 65%;
			max-width: 65%;
			position: relative;
			display: flex;
			flex-flow: row wrap;
			padding: 1rem 0 1rem 1rem;
			margin: auto 0;
		}

		&__title-container {
			display: flex;
			padding-bottom: 1.5rem;

			h1 {
				@include ribbon-heading;
				margin: auto;
			}
		}

		&__links {
			display: flex;
			justify-content: center;
			padding: 0.5rem 0 1rem;

			a {
				@include primary-button;
				margin-right: 1rem;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		&__description-container {
			margin: 1rem 0 2rem;
			position: relative;
			// border-radius: 15px;
			overflow: hidden;
			padding: 1rem;
			z-index: 1;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
			
			:global(> *) {
				margin-bottom: 1rem;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&__screenshot-container {
			@include image-container;
			margin: auto 1rem;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
		}

		&__project-nav {
			display: flex;
			justify-content: space-between;
			margin-top: auto;
			flex-flow: row wrap;
			padding-bottom: 1rem;
			
			a {
				margin: auto 1rem auto 0;
				@include primary-button;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		@media screen and (max-width: 2000px) {
			min-height: calc(100vh - #{$header-height} - #{$footer-height});
		}

		@media screen and (max-width: 1000px) {
			&__project-container {
				flex-flow: row wrap;
			}

			&__details-section {
				flex: 100%;
			}

			&__screenshot-section {
				flex: 100%;
				max-width: 100%;
				padding: 1rem 0;
			}
		}

		@media screen and (max-width: 700px) {
			&__project-nav {
				padding: 1rem 0;
			}
		}

		@media screen and (max-width: 446px) {
			&__project-nav {
				.project__list-link {
					margin: 1.5rem auto 0 auto;
					order: 1;
					padding: 0.25rem 1.5rem;
				}
			}
		}
	}
</style>
