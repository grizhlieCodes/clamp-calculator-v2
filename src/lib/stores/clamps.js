import { writable, get } from 'svelte/store';

const clamps = writable([{
    "minViewport": 375,
    "maxViewport": 1120,
    "minSize": 20,
    "maxSize": 40,
    "rootFontSize": 100
}]);

const customClamps = {
	subscribe: clamps.subscribe,
	addClamp: (newClamp) => {
		clamps.update((tempClamp) => {
			tempClamp.push(newClamp);
			return tempClamp;
		});
		customClamps.updateLocalStorage()
	},
	removeClamp: (clampIndex) => {
		clamps.update((tempClamp) => {
			console.log({tempClamp, clampIndex})
			const newClamps = tempClamp.filter((clam, index) => index !== clampIndex);
			console.log(newClamps)
			return newClamps;
		});
		customClamps.updateLocalStorage()
	},
	removeAllClamps: () => {
		clamps.set([])
		customClamps.updateLocalStorage()
	},
	updateLocalStorage: () => {
		const data = JSON.stringify(get(clamps))
		localStorage.setItem('grizhlieClamps', data)
	},
	updateClampsFromLocalData: () => {
		if(!localStorage.getItem('grizhlieClamps')) return
		const localStorageString = localStorage.getItem('grizhlieClamps')
		const newData = JSON.parse(localStorageString)
		clamps.set(newData)
	}
};

export default customClamps;
