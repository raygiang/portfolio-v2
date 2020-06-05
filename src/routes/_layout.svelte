<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style lang="scss" global>
	@import '../../style/global.scss';
</style>

<Header {segment}/>

<main>
	<slot></slot>
</main>

<Footer />
