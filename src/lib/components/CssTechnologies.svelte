<script lang="ts">
	import BasicButton from '$lib/ui/BasicButton.svelte';
	import selected from '$lib/stores/selected';
	import AdditionalInfo from '$lib/components/AdditionalInfo.svelte';

    const additionalInfoCssTechnology = {
		ariaLabel: 'Open modal with additional information on picking a CSS Technology',
		dialogContent:
			'Using clamp is different across technologies. Selecting tailwind will make your clamps start with tailwind related text like text-[... or w-[..., whilst selecting CSS would result in font-size:... or width: ...! Tailwind classes also require underscores (_) and not spaces. We have done that for you.',
		modalHeading: 'CSS Technology?'
	};

	interface technology {
		name: string;
		rule?: object;
	}

	export let cssTechnologies: technology[] = [];
</script>


<div class="flex gap-2 text-2xl font-bold text-neutral-900 dark:text-slate-300 transition-colors">
    <h2>Select CSS Technology</h2>
    <AdditionalInfo {...additionalInfoCssTechnology} />
</div>
<div class="flex flex-wrap gap-3">
    {#each cssTechnologies as technology}
        {@const selected = technology.name === $selected.technology}
        <BasicButton {selected} content={technology.name} on:btnClick />
    {/each}
</div>
