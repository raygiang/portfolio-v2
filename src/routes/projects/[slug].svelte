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
	import { onMount, beforeUpdate } from 'svelte';
	import ScreenshotSlider from '../../components/project/ScreenshotSlider.svelte';
	import Icon from 'svelte-awesome';
	import { globe, github, chevronRight, chevronLeft } from 'svelte-awesome/icons';

	export let project;
	export let currentIndex = 0;
	let mounted;
	let projectScreens;
	let projectTags = [];

	onMount(() => mounted = true);

	beforeUpdate(() => {
		if(project && project.metadata.screenshots) {
			projectScreens = JSON.parse(project.metadata.screenshots);
		}
		if(project && project.metadata.tags) {
			projectTags = JSON.parse(project.metadata.tags);
		}
	});
</script>

<svelte:head>
	<title>Raymond Giang - {project.metadata.title}</title>
</svelte:head>

{#if mounted}
	<section class='project' in:fade="{{ duration: 500 }}">
		<div class="project__wrapper page-wrapper">
			<div class="project__project-container">
				<div class="project__details-section">
					<div class="project__title-container">
						<h1>{project.metadata.title}</h1>
					</div>
					<div class="project__description-container">
						{@html project.html}
					</div>
					<div class="project__tag-container">
						{#each projectTags as tag}
							<span class="project__tag">{tag}</span>
						{/each}
					</div>
					<div class="project__links">
						{#if project.metadata.link}
							<div class="project__link-container">
								<a href="{project.metadata.link}" title="Live Link" target="_blank" rel="nofollow noreferrer">
									<Icon data={globe} />
									<span>Live Link</span>
								</a>
							</div>
						{/if}
						{#if project.metadata.github}
							<div class="project__link-container">
								<a href="{project.metadata.github}" title="Github Link" target="_blank" rel="nofollow noreferrer">
									<Icon data={github} />
									<span>View on GitHub</span>
								</a>
							</div>
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
				<a rel=prefetch href="/projects/{project.prevSlug}" class="project__previous-link">
					<Icon class="project__left-arrow" data={chevronLeft} />
					<span>Previous Project</span>
				</a>
				<a rel=prefetch href="/projects/{project.nextSlug}" class="project__next-link">
					<span>Next Project</span>
					<Icon class="project__right-arrow" data={chevronRight} />
				</a>
			</div>
		</div>
	</section>
{:else}
	<section class='project'></section>
{/if}

<style lang="scss">
	@import '../style/theme.scss';

	.project {
		display: flex;

		&__wrapper {
			display: flex;
			flex-direction: column;
			padding: 2rem 3rem;
		}

		&__project-container {
			display: flex;
			height: 100%;
		}

		&__details-section {
			flex: 35%;
			display: flex;
			flex-direction: column;
		}

		&__screenshot-section {
			flex: 65%;
			max-width: 65%;
			position: relative;
			display: flex;
			flex-direction: column;
			padding-left: 1rem;
		}

		&__title-container {
			display: flex;
			padding-bottom: 1.5rem;

			h1 {
				@include ribbon-heading;
				margin: auto 1rem auto 1rem;
				text-align: center;
			}
		}

		&__description-container {
			padding: 1rem 0;
			overflow: hidden;
			color: $text-color;
			
			:global(> *) {
				margin-bottom: 1rem;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&__tag-container {
			padding: 1rem 0;
			display: flex;
			flex-flow: row wrap;

			span {
				background-color: $accent-color;
				padding: 0.25rem 0.75rem;
				color: #FFF;
				margin-right: 1rem;
				margin-bottom: 1rem;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		&__links {
			display: flex;
			flex-direction: column;
			padding: 1rem 1rem calc(1rem + 5px);
			background-color: $text-color;
			color: #FFF;

			> div {
				margin-bottom: 1rem;

				a {
					text-decoration: none;
					color: #FFF;
					display: flex;
					width: max-content;
					
					:global(svg) {
						margin: auto 0.5rem auto 0;
						width: 20px;
						height: 20px;
					}

					span {
						@include primary-link;
						text-transform: uppercase;
					}
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&__screenshot-container {
			@include image-container;
			margin: 0 1rem;
			box-shadow: 0 0 12px -8px rgba(0, 0, 0, 0.8);
		}

		&__project-nav {
			display: flex;
			justify-content: space-between;
			margin-top: auto;
			flex-flow: row wrap;
			padding-top: 2rem;
			
			a {
				margin: auto 1rem auto 0;
				display: flex;
				text-decoration: none;

				:global(svg) {
					color: $text-color;
					width: 8px;
					height: 8px;
					transition: 0.3s all ease;
				}

				span {
					@include primary-link;
					color: $text-color;
				}

				&:last-child {
					margin-right: 0;
				}

				&:hover {
					span {
						border-bottom: 3px solid $primary-color;
					}

					:global(.project__left-arrow) {
						margin: auto 0.6rem auto -0.3rem;
					}

					:global(.project__right-arrow) {
						margin: auto -0.3rem auto 0.6rem;
					}
				}
			}
		}

		:global(.project__left-arrow) {
			margin: auto 0.3rem auto 0;
		}

		:global(.project__right-arrow) {
			margin: auto 0 auto 0.3rem;
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

			&__screenshot-container {
				margin: auto 0;
			}
		}

		@media screen and (max-width: 700px) {
			&__wrapper {
				padding: 2rem 1.5rem;
			}

			&__project-nav {
				padding: 1rem 0;
			}
		}
	}
</style>
