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
						class="rounded-xl border border-neutral-300
						bg-white py-3 px-4
                    text-base transition-all group-focus-within:border-blue-600 group-focus-within:bg-blue-100 group-focus-within:font-medium
                    group-focus-within:text-blue-900
                    dark:border-slate-700
					dark:bg-slate-800
                    dark:text-slate-200
					dark:outline-none
                    dark:group-focus-within:border-blue-700
                    dark:group-focus-within:bg-gray-900
					dark:group-focus-within:text-blue-200
                      "
						bind:value={variable[1].value}
					/>
				</label>
			{/each}
		</div>

		<button
			type="submit"
			class=" mt-12 rounded-xl bg-indigo-600 py-3 text-xl
		font-bold text-indigo-50 transition-colors focus:bg-indigo-800 hover:bg-indigo-800
		dark:bg-indigo-700 dark:focus:bg-indigo-900 dark:hover:bg-indigo-900"
		>
			<span> Add Clamp + </span>
		</button>
	</form>
</div>
