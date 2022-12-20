<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let dialogContent: string = 'Dialog Content Empty',
		modalHeading: string = 'Heading missing',
		dialog: any,
		modalOpen: boolean = false;
</script>

<dialog
	bind:this={dialog}
	class=" max-w-md flex-col transition-all 
{modalOpen
		? 'opacity-100 backdrop:bg-slate-900/50'
		: `opacity-0
backdrop:bg-slate-900/50 dark:backdrop:bg-slate-900/30`}
     gap-2 rounded-2xl bg-white px-6 dark:bg-slate-700  "
>
	<h3 class="text-xl font-bold text-neutral-900 transition-colors dark:text-slate-50">
		{modalHeading}
	</h3>
	<p class="text-base font-normal text-slate-600 transition-colors  dark:text-slate-200">
		{dialogContent}
	</p>
	<button
		on:click={() => dispatch('closeDialog')}
		class="mt-2 w-max rounded-md bg-blue-100 px-4
         py-2 text-base font-medium text-blue-900 transition-colors focus:bg-blue-200 
         hover:bg-blue-200 dark:bg-blue-700 dark:text-blue-50 dark:focus:bg-blue-600 dark:hover:bg-blue-600"
		>Close Modal</button
	>
</dialog>
