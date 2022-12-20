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
		? `border border-blue-900 bg-blue-600 text-blue-50 dark:border-blue-800 dark:bg-blue-800 dark:text-blue-100`
		: `bg-white dark:bg-slate-800 border border-neutral-300
		text-neutral-800 focus:border-blue-600 focus:bg-blue-200
		hover:border-blue-600 hover:bg-blue-200 dark:border-slate-800
		dark:text-slate-300 dark:hover:bg-slate-600 dark:focus:bg-slate-600`}"
>
	{content}
</button>
