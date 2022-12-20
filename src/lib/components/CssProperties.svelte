<script lang="ts">
	import BasicButton from '$lib/ui/BasicButton.svelte';
	import selected from '$lib/stores/selected';
	import AdditionalInfo from '$lib/components/AdditionalInfo.svelte';

	const additionalInfoCssProperty = {
		ariaLabel: 'Open modal with additional information on picking a CSS property',
		dialogContent:
			'Clamp might work differently based on a different property. Or we simply found this to be a worthwhile timesaver for you. So whether you need clamp for width or font-size, we have you covered.',
		modalHeading: 'CSS Property?'
	};

	interface style {
		name: string;
		rule?: string;
	}

	export let cssProperties: style[] = [];
</script>

<div class="flex gap-2 text-2xl font-bold text-neutral-900 dark:text-slate-300 transition-colors">
	<h2>Select CSS Property</h2>
	<AdditionalInfo {...additionalInfoCssProperty} />
</div>
<div class="flex flex-wrap gap-3">
	{#each cssProperties as property}
		{@const selected = property.name === $selected.property}
		<BasicButton {selected} content={property.name} on:btnClick />
	{/each}
</div>
