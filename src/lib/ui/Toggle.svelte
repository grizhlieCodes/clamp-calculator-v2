<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let name: string,
		toggled: boolean = false,
		width: string = "74px",
		height: string = "38px",
		padding: string = "3px";
	
	const dispatchToggle = () => {
		dispatch('toggled', name); //'dmToggle'
	};

	// export function handle(compObject){
	// 	let name = 'toggle'
	// 	console.trace(compObject[name].props)
	// 	compObject[name].props.toggledState  = !compObject[name].props.toggledState 
	// 	console.trace(compObject[name].props)
	// }

</script>
<button

	style="
	--width: {width};
	--height: {height};
	--padding: {padding};
	--sides:calc(var(--padding) * 2);
	--dial-dim: calc(var(--height) - var(--sides));
	--dial-trans: calc(var(--width) - var(--sides) - var(--dial-dim));
	width: var(--width);
	height: var(--height);
	padding: var(--padding);
	"



	class="outline-0 outline-offset-0 border-0 rounded-full {toggled ?
	'bg-cyan-800' : 'bg-cyan-500'} cursor-pointer
	"

	role="switch"
	tabindex="0"
	aria-checked="{toggled}"
	on:click={dispatchToggle}>
	<span class="sr-only"><slot/></span>
	<span
		style:width="var(--dial-dim)"
		style:height="var(--dial-dim)"


		class=" bg-white rounded-full transition block duration-200 ease-in-out {toggled ? 'translate-x-[var(--dial-trans)]' : 'translate-x-0'}" />
</button>
