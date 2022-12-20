<script lang="ts">
	import Link from '$lib/ui/Link.svelte';
	import Toggle from '$lib/ui/Toggle.svelte';
    import dmStore from '$lib/stores/darkmode'
    import { onMount } from 'svelte';
    
	const handleToggle = () => (dmStore.toggleDarkmode());

    let domLoaded = false;

    onMount(() => {
        domLoaded = true
        if(domLoaded){
            dmStore.updateDarkmodeFromLocalStorage()
        }
    })

	const toggleDM = (state: boolean) => {
        if(!domLoaded) return
		const html: any = document.querySelector('html');
		state ? html.classList.add('dark') : html.classList.remove('dark');
	};

	$: toggleDM($dmStore);
</script>

<header
	class="flex h-max w-full items-center justify-center bg-gradient-to-l from-indigo-200
to-fuchsia-50 py-8 px-6 dark:from-[#1C2D5E] dark:to-[#0F172A] transition-colors"
>
	<div class="grid w-full max-w-[1120px] grid-cols-1 grid-rows-[repeat(2,max-content)] gap-y-8">
		<div class="justify-self-end">
			<Toggle toggled={$dmStore} name="dm-toggle" on:toggled={handleToggle}>Hello</Toggle>
		</div>
		<div class="flex w-full flex-col items-center gap-3 text-center">
			<h1 class="text-4xl font-bold text-neutral-900 dark:text-stone-100">
				<span class="text-indigo-600 dark:text-indigo-400 transition-colors">[Clamp]</span> Calculator
			</h1>
			<p class="max-w-3xl dark:text-indigo-200 transition-colors">
				A simple calculator to speed up using <Link
					link="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">clamp</Link
				>
				for truly responsive font-sizes. Watch this <Link
					link="https://www.youtube.com/watch?v=VsNAuGkCpQU&t=410s">video</Link
				> explaining what it is, how it works and how you can use it. Hopefully calculating things won’t
				be so painful now!
			</p>
			<p class="dark:text-indigo-200 transition-colors">Bonus: feel free to leave this page. Your text will be saved in local storage.</p>
		</div>
	</div>
</header>
