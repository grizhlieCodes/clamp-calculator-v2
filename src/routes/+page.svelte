<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Card from '$lib/ui/Card.svelte';
	import selectedStore from '$lib/stores/selected';
	import TopSelections from '$lib/components/TopSelections.svelte';
	import Form from '$lib/components/Form.svelte';
	import Clamps from '$lib/components/Clamps.svelte';
	import { onMount } from 'svelte';
	import clamps from '$lib/stores/clamps'
	let mounted = false;

	onMount(() => { clamps.updateClampsFromLocalData() })
</script>

<main class="min-h-[150vh] bg-slate-50 w-full">
	<Header />
	<div
		class="flex flex-wrap h-max min-h-[30rem] w-full justify-center items-start gap-20 py-20
	px-6"
	>
		<Card>
			<TopSelections />
			<Form />
		</Card>

		<Card styling="">
			<Clamps />
		</Card>
	</div>
</main>

<!-- 	
    const rules = {
		css: {
			before: {
				fontSize: 'font-size: ',
				width: 'width: ',
				height: 'height: ',
				lineHeight: 'line-height: ',
				none: ''
			},
			after: ';',
			spacing: ' '
		},
		tailwind: {
			before: {
				fontSize: 'text-[',
				width: 'w-[: ',
				height: 'h-[',
				lineHeight: 'leading-['
			},
			after: ']',
			spacing: '_'
		},
		tailwindConfig: {
			before: `changeThis': [`,
			after: `', {}]`,
			spacing: ' '
		},
		cssVariable: {
			before: `--changeThis: `,
			after: `;`,
			spacing: ` `
		},
		sassVariable: {
			before: `$changeThis: `,
			after: `;`,
			spacing: ` `
		}
	};
 -->
