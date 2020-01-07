export enum Actions {
    ADD_CITY = 'ADD_CITY',
    CHOOSE_CITY = 'CHOOSE_CITY'
}

export interface IActionIncDec {
    type?: Actions
}

import data from './data'

export default (state = {title: 'Weather app', cities: ['Moscow'], data}, action: IActionIncDec) => {
    const {type} = action

    switch (type) {
        case Actions.ADD_CITY:

        case Actions.CHOOSE_CITY:

        default:
            return state
    }
}