import {get, writable} from 'svelte/store';

const darkmode = writable(false)

const customDarkmode = {
    subscribe: darkmode.subscribe,
    updateDarkmode: (newState) => {
        darkmode.set(newState)
        localStorage.setItem('grizhlie-darkmode', JSON.stringify(newState))
    },
    toggleDarkmode: () => {
        const newState = !get(darkmode)
        localStorage.setItem('grizhlie-darkmode', JSON.stringify(newState))
        darkmode.set(newState)
    },
    updateDarkmodeFromLocalStorage: () => {
        if(!localStorage.getItem('grizhlie-darkmode')) return
        const localStorageString = localStorage.getItem('grizhlie-darkmode')
        const newState = JSON.parse(localStorageString)
        customDarkmode.updateDarkmode(newState)
    },

}

export default customDarkmode