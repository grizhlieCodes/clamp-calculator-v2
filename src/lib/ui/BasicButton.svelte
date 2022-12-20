<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	export let content: string = '',
		selected: boolean = false;
</script>

<button
	on:click={() => dispatch('btnClick', content)}
	class="rounded-xl py-3 px-4 text-lg font-bold transition-all
    {selected
		? ' border border-blue-900 bg-blue-600 text-blue-50'
		: 'border border-neutral-300 bg-white hover:border-blue-600  hover:bg-blue-200 focus:border-blue-600 focus:bg-blue-200'}"
>
	{content}
</button>
