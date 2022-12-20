<script lang="ts">
	import BasicButton from '$lib/ui/BasicButton.svelte';
	import selected from '$lib/stores/selected';
	import AdditionalInfo from '$lib/components/AdditionalInfo.svelte';

    const additionalInfoCssStyle = {
		ariaLabel: 'Open modal with additional information on picking a CSS style',
		dialogContent:
			'Our clamp calculator can output correct code depending on what you need. If you are using tailwind, select that. If you want to copy the code as a normal css value, select that. Etc.',
		modalHeading: 'CSS Style?'
	};

	interface style {
		name: string;
		rule?: object;
	}

	export let cssStyles: style[] = [];
</script>


<div class="flex gap-2 text-2xl font-bold">
    <h2>Select CSS Style</h2>
    <AdditionalInfo {...additionalInfoCssStyle} />
</div>
<div class="flex flex-wrap gap-3">
    {#each cssStyles as style}
        {@const selected = style.name === $selected.style}
        <BasicButton {selected} content={style.name} on:btnClick />
    {/each}
</div>
