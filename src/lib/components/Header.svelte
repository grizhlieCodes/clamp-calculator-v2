<script lang="ts">
    import Link from "$lib/ui/Link.svelte";
	import Toggle from "$lib/ui/Toggle.svelte";
    let darkMode = false;
    const handleToggle = () => darkMode = !darkMode
</script>

<header class="w-full h-max py-8 px-6 flex items-center justify-center
bg-gradient-to-l from-indigo-200 to bg-fuchsia-50">
    <div class="grid grid-cols-1 grid-rows-[repeat(2,max-content)] gap-y-8 w-full max-w-[1120px]">
        
        <div class="justify-self-end">
            <Toggle toggled={darkMode} name="dm-toggle" on:toggled={handleToggle} >Hello</Toggle>
        </div>
        <div class="w-full text-center flex flex-col gap-3 items-center">
            <h1 class="text-4xl font-bold text-neutral-900"><span class="text-indigo-600">[Clamp]</span> Calculator</h1>
            <p class="max-w-3xl">
                A simple calculator to speed up using <Link
                link="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">clamp</Link>
                for truly responsive font-sizes. Watch this <Link link="https://www.youtube.com/watch?v=VsNAuGkCpQU&t=410s">video</Link> explaining what
                it is, how it works and how you can use it. Hopefully calculating
                things won’t be so painful now!
            </p>
            <p>
                Bonus: feel free to leave this page. Your text will be saved in local storage.
            </p>
        </div>
    </div>
</header>