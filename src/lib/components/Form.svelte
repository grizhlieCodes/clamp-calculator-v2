<script lang="ts">
	import AdditionalInfo from '$lib/components/AdditionalInfo.svelte';
	import clamps from '$lib/stores/clamps.js';

	const additionalInfoUpdateVariables = {
		ariaLabel:
			'Open modal with additional information on inputting variables for the clamp function.',
		dialogContent:
			'Clamp is a function that helps us with growing content, be it width or font-size, and it requires 3 main variables: minimum size, calculation and maximum size. The variables in this section set and calculate everything for a perfectly fluid clamp calculation between the min and max sizes.',
		modalHeading: 'CSS Variables?'
	};

	const variables = {
		minViewport: {
			name: 'Min Viewport (px)',
			additionalInfo: {},
			value: 375
		},
		maxViewport: {
			name: 'Max Viewport (px)',
			additionalInfo: {},
			value: 1120
		},
		minSize: {
			name: 'Min Size (px)',
			additionalInfo: {},
			value: 20
		},
		maxSize: {
			name: 'Max Size (px)',
			additionalInfo: {},
			value: 40
		},
		rootFontSize: {
			name: 'Root Font-Size (%)',
			additionalInfo: {},
			value: 100
		}
	};

	const addClamp = () => {
		const newClamp = {
			minViewport: variables.minViewport.value,
			maxViewport: variables.maxViewport.value,
			minSize: variables.minSize.value,
			maxSize: variables.maxSize.value,
			rootFontSize: variables.rootFontSize.value
		};

		clamps.addClamp(newClamp);
	};

	$: console.log($clamps);
</script>

<div class="flex flex-1 basis-80 flex-col gap-6">
	<div class="flex gap-2 text-2xl font-bold text-neutral-900 transition-colors dark:text-slate-300">
		<h2>Select CSS Style</h2>
		<AdditionalInfo {...additionalInfoUpdateVariables} />
	</div>

	<form class="flex flex-col gap-12" on:submit={addClamp}>
		<div class="flex flex-wrap gap-6">
			{#each Object.entries(variables) as variable}
				{@const varName = variable[0]}
				<label for={varName} class="group flex flex-col gap-3">
					<div class="flex gap-1">
						<p class="text-xl font-medium text-neutral-900 transition-colors dark:text-slate-200">
							{variable[1].name}
						</p>
					</div>
					<input
						type="number"
						id={varName}
						class="rounded-xl border dark:outline-none
						bg-white dark:bg-slate-800 dark:text-slate-200
                    border-neutral-300 dark:border-slate-700 py-3 px-4 text-base
                    transition-all
                    group-focus-within:border-blue-600
					dark:group-focus-within:border-blue-700
                    group-focus-within:bg-blue-100
					dark:group-focus-within:bg-gray-900
                    group-focus-within:font-medium
                    group-focus-within:text-blue-900
					dark:group-focus-within:text-blue-200
                      "
						bind:value={variable[1].value}
					/>
				</label>
			{/each}
		</div>

		<button
			type="submit"
			class="rounded-xl bg-indigo-600 dark:bg-indigo-700 py-3
		text-xl font-bold text-indigo-50 transition-colors focus:bg-indigo-800
		dark:focus:bg-indigo-900 hover:bg-indigo-800 dark:hover:bg-indigo-900"
		>
			<span> Add Clamp + </span>
		</button>
	</form>
</div>

<!-- 

	//We first need to define our core variables:
	$: rootFontSizePixels = (variables.rootFontSize.value / 100) * 16;
	$: minWidth = variables.minViewport.value / rootFontSizePixels;
	$: maxWidth = variables.maxViewport.value / rootFontSizePixels;

	$: maxSizeRem = variables.maxSize.value / rootFontSizePixels;
	$: minSizeRem = variables.minSize.value / rootFontSizePixels;

	//Then we can use core variables and calculate everything needed for our calcs
	$: slope = (maxSizeRem - minSizeRem) / (maxWidth - minWidth);
	$: yAxisIntersection = -minWidth * slope + minSizeRem;
	$: vwUnits = slope * 100;

	//Store the default rules here, when we update our store, our styling,
	//befores and afters will also change the final outputs that users can copy
	$: styleRule = $selectedStore.styleRule;
	$: propertyRule = $selectedStore.propertyRule;

	//I had to split the 'display' variable as it just became a massive string literal
	$: displayBefore = `${
		typeof styleRule.before === 'string' || styleRule.before instanceof String
			? styleRule.before
			: styleRule.before[propertyRule]
	}`;

	$: displayMinSize = `clamp(${minSizeRem}rem,`;
	$: displayCalc = `${styleRule.spacing}${yAxisIntersection.toFixed(4)}rem${styleRule.spacing}+${
		styleRule.spacing
	}${vwUnits.toFixed(4)}vw,`;
	$: displayMaxSize = `${styleRule.spacing}${maxSizeRem}rem)`;
	$: displayAfter = `${
		typeof styleRule.after === 'string' || styleRule.after instanceof String
			? styleRule.after
			: styleRule.after[propertyRule]
	}`;

	$: display = `${displayBefore}${displayMinSize}${displayCalc}${displayMaxSize}${displayAfter}`;


 -->
