<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Card from '$lib/ui/Card.svelte';
	import TopSelections from '$lib/components/TopSelections.svelte';
	import Form from '$lib/components/Form.svelte';
	import Clamps from '$lib/components/Clamps.svelte';
	import { onMount } from 'svelte';
	import clamps from '$lib/stores/clamps';
	import darkmode from '$lib/stores/darkmode'

	onMount(() => {
		clamps.updateClampsFromLocalData();
		darkmode.updateDarkmodeFromLocalStorage()
	});
</script>

<main class="min-w-screen h-max pb-40 w-full bg-slate-50 dark:bg-[#0A1423]
transition-colors ">
	<Header />
	<div
		class="flex h-max min-h-[30rem] w-full flex-wrap items-start justify-center gap-20 py-20
	px-6 "
	>
		<Card styling="">
			<TopSelections />
			<Form />
		</Card>

		<Card styling="">
			<Clamps />
		</Card>
	</div>
</main>