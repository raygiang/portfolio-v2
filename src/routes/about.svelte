<script>
	import { fade } from 'svelte/transition';
	import IconifyIcon from '@iconify/svelte';

	// Languages
	import html5 from '@iconify/icons-logos/html-5';
	import css3 from '@iconify/icons-logos/css-3';
	import javascript from '@iconify/icons-logos/javascript';
	import typescript from '@iconify/icons-logos/typescript-icon';
	import cSharp from '@iconify/icons-logos/c-sharp';
	import php from '@iconify/icons-logos/php';
	import python from '@iconify/icons-logos/python';
	import java from '@iconify/icons-logos/java';

	// Front End
	import react from '@iconify/icons-logos/react';
	import svelte from '@iconify/icons-logos/svelte-icon';
	import sass from '@iconify/icons-logos/sass';
	import jquery from '@iconify/icons-logos/jquery';
	import bootstrap from '@iconify/icons-logos/bootstrap';

	// Back End
	import mysql from '@iconify/icons-logos/mysql';
	import mongodb from '@iconify/icons-logos/mongodb';
	import strapi from '@iconify/icons-logos/strapi';
	import keystonejs from '@iconify/icons-logos/keystonejs';

	// Others
	import wordpress from '@iconify/icons-logos/wordpress-icon';
	import asp from '@iconify/icons-logos/dotnet';
	import unity from '@iconify/icons-logos/unity';
	import git from '@iconify/icons-logos/git-icon';
	import npm from '@iconify/icons-logos/npm';

	const color = 'blue';
	const width = "75px";
	const height = "75px";
</script>

<svelte:head>
	<title>Raymond Giang - About</title>
</svelte:head>

<section class="about" in:fade="{{duration: 500}}">
	<div class="about__wrapper page-wrapper">
		<div class="about__block-intro">
			Hi, my name is Raymond Giang. I am a developer who loves learning new things. I enjoy
			working on all sorts of apps on my spare time, especially games. Thanks for visiting my 
			portfolio site!
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
			<div class="about__logo-container" title="KeystoneJS"><IconifyIcon icon={keystonejs} /></div>
		</div>
		<div class="about__block-other">
			<h2>Other Tools I've Worked With</h2>
			<div class="about__logo-container" title="WordPress"><IconifyIcon icon={wordpress} /></div>
			<div class="about__logo-container" title="ASP.NET"><IconifyIcon icon={asp} /></div>
			<div class="about__logo-container" title="Unity"><IconifyIcon icon={unity} /></div>
			<div class="about__logo-container" title="GIT"><IconifyIcon icon={git} /></div>
			<div class="about__logo-container" title="NPM"><IconifyIcon icon={npm} /></div>
		</div>
		<div class="about__block-contact">
			<p>
				Feel free to download my 
				<a target="_blank" rel="nofollow noreferrer" href="resume.pdf">resume</a> 
				to learn more about me. Or send me an 
				<a href="mailto:raymondgiang@gmail.com">email</a> 
				with any questions.
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../style/theme.scss';

	.about {
		height: calc(100vh - #{$header-height} - #{$footer-height});
		min-height: 535px;
		max-height: 750px;
		font-size: 15px;

		&__wrapper {
			display: grid;
			height: 100%;
			grid-template-columns: repeat(24, 1fr);
			grid-template-rows: repeat(16, 6.25%);
		}

		&__block-intro {
			grid-column: 1 / span 7;
			grid-row: 2 / span 6;
			background-color: #FFCC99;
		}

		&__block-lang {
			grid-column: 9 / span 6;
			grid-row: 4 / span 10;
			background-color: lightgreen;
		}

		&__block-fe {
			grid-column: 16 / span 9;
			grid-row: 2 / span 4;
			background-color: lavender;
		}
		&__block-be {
			grid-column: 17 / span 7;
			grid-row: 7 / span 4;
			background-color: #FF999B;
		}

		&__block-other {
			grid-column: 2 / span 6;
			grid-row: 9 / span 7;
			background-color: lightyellow;
		}

		&__block-contact {
			grid-column: 18 / span 5;
			grid-row: 12 / span 4;
			background-color: cyan;
		}

		[class^="about__block"] {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			padding: 1rem;
			overflow-y: auto;
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);

			h2 {
				flex: 100%;
				text-align: center;
				font-size: 22px;
			}

			&.about__block-intro, &.about__block-contact {
				flex-direction: column;
			}
		}

		&__logo-container {
			padding: 0.5rem;
			width: 65px;
			height: 65px;

			:global(svg) {
				width: 100%;
				height: 100%;
			}
		}

		@media screen and (max-width: 1000px) {
			max-height: unset;

			&__wrapper {
				grid-auto-flow: dense;
			}

			&__block-intro {
				grid-column: span 11;
				grid-row: span 8;
			}

			&__block-lang {
				grid-column: span 13;
				grid-row: span 8;
			}

			&__block-fe {
				grid-column: span 13;
				grid-row: span 4;
			}

			&__block-be {
				grid-column: span 11;
				grid-row: span 4;
			}

			&__block-other {
				grid-column: span 15;
				grid-row: span 8;
			}

			&__block-contact {
				grid-column: span 9;
				grid-row: span 4;
			}
		}

		@media screen and (max-width: 668px) {
			max-height: unset;
			min-height: 1000px;

			&__wrapper {
				grid-auto-flow: dense;
			}

			&__block-intro {
				grid-column: 1 / -1;
				grid-row: span 2;
				font-size: 16px;
			}

			&__block-lang {
				grid-column: 1 / -1;
				grid-row: span 3;
			}

			&__block-fe {
				grid-column: 1 / -1;
				grid-row: span 3;
			}

			&__block-be {
				grid-column: 1 / -1;
				grid-row: span 3;
			}

			&__block-other {
				grid-column: 1 / -1;
				grid-row: span 3;
			}

			&__block-contact {
				grid-column: 1 / -1;
				grid-row: span 2;
			}
		}

		@media screen and (max-width: 500px) {
			min-height: 1400px;
		}
	}
</style>
