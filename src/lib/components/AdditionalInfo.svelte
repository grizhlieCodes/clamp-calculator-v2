<script lang="ts">
	import Dialog from '$lib/components/Dialog.svelte';

	export let ariaLabel: string = 'Description Empty',
		dialogContent: string = 'Dialog Content Empty',
		modalHeading: string = 'Heading missing';

	let dialog: any;

	const closeModalOnEscape = (event: { key: string }) => {
		const { key } = event;
		if (key === 'Escape') {
			closeModal();
		}
	};

	let modalOpen = false;
	const openModal = () => {
		dialog.showModal();
		modalOpen = true;
		dialog.classList.add('flex');
		window.addEventListener('keydown', closeModalOnEscape);
	};
	const closeModal = () => {
		if (dialog.open) dialog.close();
		modalOpen = false;
		dialog.classList.remove('flex');
		window.removeEventListener('keydown', closeModalOnEscape);
	};
</script>

<button
	on:click={openModal}
class="flex hover:opacity-70 focus:opacity-70
fill-neutral-900 dark:fill-slate-300 transition-colors"
	type="button"
	aria-label={ariaLabel}
>
	<svg class="w-6 fill-inherit" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
		class="fill-inherit"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9.5 5C9.5 7.20914 7.70914 9 5.5 9C3.29086 9 1.5 7.20914 1.5 5C1.5 2.79086 3.29086 1 5.5 1C7.70914 1 9.5 2.79086 9.5 5ZM6 3C6 3.27614 5.77614 3.5 5.5 3.5C5.22386 3.5 5 3.27614 5 3C5 2.72386 5.22386 2.5 5.5 2.5C5.77614 2.5 6 2.72386 6 3ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5C4.5 5.27614 4.72386 5.5 5 5.5V7C5 7.27614 5.22386 7.5 5.5 7.5H6C6.27614 7.5 6.5 7.27614 6.5 7C6.5 6.72386 6.27614 6.5 6 6.5V5C6 4.72386 5.77614 4.5 5.5 4.5H5Z"
		/>
	</svg>
</button>

<Dialog {dialogContent} on:closeDialog={closeModal} {modalHeading} bind:dialog {modalOpen} />
