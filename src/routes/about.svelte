<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import IconifyIcon from '@iconify/svelte';

	let mounted;

	// Languages
	import html5 from '@iconify/icons-simple-icons/html5';
	import css3 from '@iconify/icons-simple-icons/css3';
	import javascript from '@iconify/icons-simple-icons/javascript';
	import typescript from '@iconify/icons-simple-icons/typescript';
	import cSharp from '@iconify/icons-simple-icons/csharp';
	import php from '@iconify/icons-simple-icons/php';
	import python from '@iconify/icons-simple-icons/python';
	import java from '@iconify/icons-simple-icons/java';

	// Front End
	import react from '@iconify/icons-simple-icons/react';
	import svelte from '@iconify/icons-simple-icons/svelte';
	import sass from '@iconify/icons-simple-icons/sass';
	import jquery from '@iconify/icons-simple-icons/jquery';
	import bootstrap from '@iconify/icons-simple-icons/bootstrap';

	// Back End
	import mysql from '@iconify/icons-simple-icons/mysql';
	import mongodb from '@iconify/icons-simple-icons/mongodb';
	import strapi from '@iconify/icons-simple-icons/strapi';
	import nginx from '@iconify/icons-simple-icons/nginx';

	// Others
	import wordpress from '@iconify/icons-simple-icons/wordpress';
	import asp from '@iconify/icons-simple-icons/dot-net';
	import unity from '@iconify/icons-simple-icons/unity';
	import git from '@iconify/icons-simple-icons/git';
	import npm from '@iconify/icons-simple-icons/npm';

	const color = 'blue';
	const width = "75px";
	const height = "75px";

	onMount(() => mounted = true);
</script>

<svelte:head>
	<title>Raymond Giang - About</title>
</svelte:head>

{#if mounted}
	<section class="about" in:fade="{{duration: 500}}">
		<div class="about__wrapper page-wrapper">
			<div class="about__intro-container">
				<div class="about__intro-area">
					<h1 class="about__heading">
						<span>Hello,</span>
						<span>
							<span in:fade="{{duration: 500, delay: 500}}" class="about__underline-wrapper">my name is Raymond Giang.</span>
						</span>
					</h1>
					<div class="about__description-container" in:fade="{{duration: 500, delay: 1000}}" >
						<p>
							I am a developer who loves learning new things. I enjoy
							working on all sorts of apps on my spare time, especially games. Thanks for visiting my 
							portfolio site!
						</p>

						<p>
							Feel free to download my 
							<a target="_blank" rel="nofollow noreferrer" href="resume.pdf">resume</a> 
							to learn more about me. Or send me an 
							<a href="mailto:raymondgiang@gmail.com">email</a> 
							with any questions.
						</p>
					</div>
				</div>
				<div class="about__image-area" in:fade="{{duration: 500, delay: 1000}}" >
					<img src="about.png" alt="illustration on man leaning on table with a computer on top">
				</div>
			</div>
			<div class="about__skills-container">
				<div class="about__block-fe">
					<h2>Front-End Tools Used</h2>
					<div class="about__logo-container" title="React"><IconifyIcon icon={react} /></div>
					<div class="about__logo-container" title="Svelte"><IconifyIcon icon={svelte} /></div>
					<div class="about__logo-container" title="Sass"><IconifyIcon icon={sass} /></div>
					<div class="about__logo-container" title="JQuery"><IconifyIcon icon={jquery} /></div>
					<div class="about__logo-container" title="Boostrap"><IconifyIcon icon={bootstrap} /></div>
				</div>
				<div class="about__block-be">
					<h2>Back-End Tools Used</h2>
					<div class="about__logo-container" title="MySQL"><IconifyIcon icon={mysql} /></div>
					<div class="about__logo-container" title="MongoDB"><IconifyIcon icon={mongodb} /></div>
					<div class="about__logo-container" title="Strapi"><IconifyIcon icon={strapi} /></div>
					<div class="about__logo-container" title="NGINX"><IconifyIcon icon={nginx} /></div>
				</div>
				<div class="about__block-lang">
					<h2>Languages I've Worked With</h2>
					<div class="about__logo-container" title="HTML5"><IconifyIcon icon={html5} /></div>
					<div class="about__logo-container" title="CSS3"><IconifyIcon icon={css3} /></div>
					<div class="about__logo-container" title="JavaScript"><IconifyIcon icon={javascript} /></div>
					<div class="about__logo-container" title="TypeScript"><IconifyIcon icon={typescript} /></div>
					<div class="about__logo-container" title="C#"><IconifyIcon icon={cSharp} /></div>
					<div class="about__logo-container" title="PHP"><IconifyIcon icon={php} /></div>
					<div class="about__logo-container" title="Python"><IconifyIcon icon={python} /></div>
					<div class="about__logo-container" title="Java"><IconifyIcon icon={java} /></div>
				</div>
				<div class="about__block-other">
					<h2>Other Tools I've Worked With</h2>
					<div class="about__logo-container" title="WordPress"><IconifyIcon icon={wordpress} /></div>
					<div class="about__logo-container" title="ASP.NET"><IconifyIcon icon={asp} /></div>
					<div class="about__logo-container" title="Unity"><IconifyIcon icon={unity} /></div>
					<div class="about__logo-container" title="GIT"><IconifyIcon icon={git} /></div>
					<div class="about__logo-container" title="NPM"><IconifyIcon icon={npm} /></div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<section class='about'></section>
{/if}

<style lang="scss">
	@import '../../style/theme.scss';

	.about {
		&__wrapper {
			display: flex;
			flex-direction: column;
			padding: 2rem 3rem;
		}

		&__intro-container {
			padding-bottom: 2rem;
			display: flex;
		}

		&__intro-area {
			flex: 60%;
			max-width: 60%;
			padding-right: 1.5rem;
			display: flex;
			flex-direction: column;
		}

		&__image-area {
			flex: 40%;
			max-width: 40%;
			display: flex;

			img {
				width: 100%;
				height: auto;
				margin: auto;
			}
		}

		&__heading {
			display: flex;
			flex-direction: column;
			font-family: $heading-font;
			color: $accent-color;
			text-transform: uppercase;
			font-weight: bold;
			font-size: 30px;
		}

		&__underline-wrapper {
			border-bottom: 3.5px solid $primary-color;
		}

		&__description-container {
			color: $text-color;

			p {
				padding-top: 1.5rem;

				a {
					@include primary-link;
					color: $text-color;

					&:hover {
						color: $accent-color;
					}
				}
			}
		}

		&__skills-container {
			background-color: $text-color;
			color: #FFF;
			border-top: 5px solid $primary-color;
			padding: 1rem;
			display: flex;
			flex-flow: row wrap;

			[class^="about__block"] {
				flex: 50%;
				display: flex;
				flex-flow: row wrap;
				padding: 1rem;

				h2 {
					font-size: 20px;
					flex: 100%;
					padding-bottom: 1rem;
				}

				:global(svg) {
					width: 38px;
					height: 38px;
				}

				.about__logo-container {
					margin: 0 1rem 1rem 0;

					&:last-child {
						margin-right: 0;
					}
				}
			}
		}

		@media screen and (max-width: 2000px) {
			min-height: calc(100vh - #{$header-height} - #{$footer-height});
		}

		@media screen and (max-width: 768px) {
			&__wrapper {
				padding: 2rem 1.5rem;
			}

			&__intro-container {
				flex-flow: column nowrap;
			}

			&__intro-area {
				flex: 1;
				max-width: 100%;
				padding-right: 0;
			}

			&__heading {
				font-size: 25px;
			}

			&__image-area {
				@include image-container;
				flex: 1;
				max-width: 80%;
				order: -1;
				padding-bottom: 1rem;
				margin: 0 auto;
			}

			&__skills-container {
				[class^="about__block"] {
					flex: 100%;
					text-align: center;
					justify-content: center;

					:global(svg) {
						width: 25px;
						height: 25px;
					}
				}
			}
		}

		@media screen and (max-width: 500px) {
			&__image-area {
				img {
					width: 80%;
				}
			}
		}
	}
</style>
