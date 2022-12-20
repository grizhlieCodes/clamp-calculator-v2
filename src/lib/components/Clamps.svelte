<script lang="ts">
	import clamps from '$lib/stores/clamps';
	import Clamp from '$lib/components/Clamp.svelte';

	import { quintOut } from 'svelte/easing';
	import { crossfade, fly, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	const copyAllClamps = () => {
		let copyText = ``;
		const allParagraphs = [...document.querySelectorAll('p.clamp-text-to-copy')];
		allParagraphs.forEach((p, i) => {
			const newText = i === allParagraphs.length - 1 ? p.textContent : `${p.textContent}___`;
			copyText = copyText + newText;
		});
		copyText = copyText.split('___').join('\n');
		// copyText.split('___').join('\n')
		navigator.clipboard.writeText(copyText);
		console.log(copyText);
	};
</script>

{#if $clamps.length > 0}
	<div class="flex flex-col gap-6 w-full">
		{#each $clamps as clampData, index (index)}
			<div in:receive={{ key: index }} out:send={{ key: index }}
			animate:flip={{ duration: 100 }} class="w-full">
				<Clamp {...clampData} {index} />
			</div>
		{/each}
	</div>
	{#if $clamps.length > 1}
		<div class="flex gap-3 flex-wrap" transition:slide={{ duration: 150 }}>
			<button
				on:click={copyAllClamps}
				class="flex flex-1 items-center
                justify-center gap-4 rounded-xl bg-green-100 stroke-green-900 py-4
                pl-5 text-green-900 transition-colors focus-within:bg-green-200 hover:bg-green-200 focus:bg-green-200"
			>
				<!-- text  -->
				<p class="w-max text-center text-xl font-normal">Copy All</p>
				<div class="">
					<svg
						class="h-5 stroke-inherit"
						viewBox="0 0 19 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.75 6.5V5.108C5.75 3.973 6.595 3.01 7.726 2.916C8.099 2.886 8.474 2.859 8.849 2.836M13.25 17H15.5C16.0967 17 16.669 16.7629 17.091 16.341C17.5129 15.919 17.75 15.3467 17.75 14.75V5.108C17.75 3.973 16.905 3.01 15.774 2.916C15.4 2.88498 15.0256 2.85831 14.651 2.836M13.25 17.75V15.875C13.25 14.9799 12.8944 14.1215 12.2615 13.4885C11.6285 12.8556 10.7701 12.5 9.875 12.5H8.375C8.07663 12.5 7.79048 12.3815 7.5795 12.1705C7.36853 11.9595 7.25 11.6734 7.25 11.375V9.875C7.25 8.97989 6.89442 8.12145 6.26149 7.48851C5.62855 6.85558 4.77011 6.5 3.875 6.5H2.75M14.65 2.836C14.508 2.3767 14.2226 1.97493 13.8357 1.68954C13.4489 1.40414 12.9808 1.25011 12.5 1.25H11C10.5192 1.25011 10.0511 1.40414 9.66426 1.68954C9.27738 1.97493 8.99203 2.3767 8.85 2.836M14.65 2.836C14.715 3.046 14.75 3.269 14.75 3.5V4.25H8.75V3.5C8.75 3.269 8.785 3.046 8.85 2.836M4.25 6.5H2.375C1.754 6.5 1.25 7.004 1.25 7.625V19.625C1.25 20.246 1.754 20.75 2.375 20.75H12.125C12.746 20.75 13.25 20.246 13.25 19.625V15.5C13.25 13.1131 12.3018 10.8239 10.614 9.13604C8.92613 7.44821 6.63695 6.5 4.25 6.5V6.5Z"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</button>
			<button
				on:click={() => clamps.removeAllClamps()}
				class="flex w-max items-center flex-1 sm:flex-initial
                justify-center gap-4 rounded-xl bg-red-100 stroke-red-900 py-4
                px-6 text-red-900 transition-colors focus-within:bg-red-200 hover:bg-red-200 focus:bg-red-200"
			>
				<!-- text  -->
				<p class="w-max text-center text-xl font-normal">Remove All</p>
				<div class="">
					<svg
						class="h-5 stroke-inherit"
						viewBox="0 0 19 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.49 8.00003L12.144 17M7.356 17L7.01 8.00003M16.978 4.79003C17.32 4.84203 17.66 4.89703 18 4.95603M16.978 4.79103L15.91 18.673C15.8664 19.2383 15.6111 19.7662 15.195 20.1513C14.779 20.5364 14.2329 20.7502 13.666 20.75H5.834C5.2671 20.7502 4.72102 20.5364 4.30498 20.1513C3.88894 19.7662 3.63359 19.2383 3.59 18.673L2.522 4.79003M16.978 4.79003C15.8239 4.61555 14.6638 4.48313 13.5 4.39303M1.5 4.95503C1.84 4.89603 2.18 4.84103 2.522 4.79003M2.522 4.79003C3.67613 4.61555 4.83623 4.48313 6 4.39303M13.5 4.39303V3.47703C13.5 2.29703 12.59 1.31303 11.41 1.27603C10.3036 1.24067 9.19638 1.24067 8.09 1.27603C6.91 1.31303 6 2.29803 6 3.47703V4.39303M13.5 4.39303C11.0037 4.20011 8.49628 4.20011 6 4.39303"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</button>
		</div>
	{/if}
{:else}
	<h2 class="text-2xl font-bold" transition:fly={{ x: 50, duration: 150 }}>
		Add some clamps, then copy them from here!
	</h2>
{/if}
