import {get, writable} from 'svelte/store';
import {cssTechnologies, cssProperties} from '$lib/data/data'

const selected = writable({technology: '', property: '', styleRule: {after: '', spacing: '', before: '' || {}}, propertyRule: ''})

const customSelected = {
    subscribe: selected.subscribe,
    updateTechnology: (newTechnology) => {
        selected.update(tempSelected => {
            tempSelected.technology = newTechnology
            return tempSelected
        })
    },
    updateProperty: (newProperty) => {
        selected.update(tempSelected => {
            tempSelected.property = newProperty
            return tempSelected
        })
    },
    updateStyleRule: (newStyleRule) => {
        selected.update(tempSelected => {
            tempSelected.styleRule = newStyleRule
            return tempSelected
        })
    },
    updatePropertyRule: (newPropertyRule) => {
        selected.update(tempSelected => {
            tempSelected.propertyRule = newPropertyRule
            return tempSelected
        })
    },
    updateOnMount: () => {
        selected.update(tempSelected => {
            tempSelected.technology = cssTechnologies[0].name
            tempSelected.property = cssProperties[0].name
            tempSelected.styleRule = cssTechnologies[0].rule
            tempSelected.propertyRule = cssProperties[0].rule
            return tempSelected
        })
    }
}

export default customSelected;