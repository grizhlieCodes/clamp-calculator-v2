<script lang="ts">
	import CssProperties from '$lib/components/CssProperties.svelte';
	import CssStyles from '$lib/components/CssStyles.svelte';
	import selectedStore from '$lib/stores/selected';
	import { cssStyles, cssProperties } from '$lib/data/data';
	import { onMount } from 'svelte';

	onMount(() => {
		selectedStore.updateOnMount();
	});

	const updateStoreStyle = (newStyle: string) => {
		selectedStore.updateStyle(newStyle);
		if (newStyle !== 'CSS' && $selectedStore.property === 'None') {
			updateStoreProperty('Width');
		}
	};

	const updateStoreProperty = (newProperty: string) => {
		selectedStore.updateProperty(newProperty);
		if (newProperty === 'None') {
			updateStoreStyle('CSS');
			const rule = cssStyles.find((style) => style.name === 'CSS').rule;
			updateStoreStyleRule(rule);
		}
	};

	const updateStoreStyleRule = (newStyleRule: object) => {
		selectedStore.updateStyleRule(newStyleRule);
	};

	const updateStorePropertyRule = (newPropertyRule: string) => {
		selectedStore.updatePropertyRule(newPropertyRule);
	};

	const handleStyleClick = (e: any) => {
		updateStoreStyle(e.detail);
		const rule = cssStyles.find((style) => style.name === e.detail).rule;
		if (rule) {
			updateStoreStyleRule(rule);
		}
	};

	const handlePropertyClick = (e: any) => {
		updateStoreProperty(e.detail);
		const rule = cssProperties.find((style) => style.name === e.detail).rule;
		updateStorePropertyRule(rule);
	};

	$: console.log($selectedStore);
</script>

<!-- top section -->
<div class="flex flex-wrap gap-14 ">
	<!-- Css Styles Selection -->
	<div class="flex flex-1 basis-80 flex-col gap-6">
		<CssStyles {cssStyles} on:btnClick={handleStyleClick} />
	</div>

	<div class="flex flex-1 basis-80 flex-col gap-6">
		<CssProperties {cssProperties} on:btnClick={handlePropertyClick} />
	</div>
</div>
