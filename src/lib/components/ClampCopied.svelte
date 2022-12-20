<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
	export let showMessage: boolean = false;

    import {fly} from 'svelte/transition'

    const dispatchClose = () => dispatch('hideMessage')
</script>

{#if showMessage}
	<div transition:fly={{y: 50, duration: 150}}
		class="absolute top-0 left-1/2 -translate-y-[calc(100%_+_20px)] -translate-x-1/2 rounded-xl bg-orange-200 p-4 text-sm
        font-bold"
    >
		<span>🗜️ Clamp Copied! ✂️</span>
	</div>
{/if}
