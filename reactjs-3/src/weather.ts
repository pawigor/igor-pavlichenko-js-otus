import {createActions, handleActions} from 'redux-actions'

export interface IState {
    title: string,
    cities: Array<string>,
    currentCityName?: string
    weather?: WeatherData,
    data: any,
    addCity: (cityName: string) => void
    chooseCity: (cityName: string) => void
}

export interface IPayload {
    type?: string,
    cityName?: string
}

const defaultState: IState = {
    title: 'Weather app',
    cities: [],
    currentCityName: undefined,
    weather: undefined,
    data: {}
}

//payload creator
export const Actions = createActions({
    addCity: (cityName: string) => ({cityName}),
    chooseCity: (cityName: string) => ({cityName})
});


export const {addCity, chooseCity} = Actions

const reducer = handleActions<IState, IPayload>({
    addCity: (state, {payload}) => {
        const {cities} = state;
        if (payload.cityName != undefined) {
            cities.push(payload.cityName)
        }
        return {...state, cities, currentCityName: payload.cityName}
    },
    chooseCity: (state, {payload}) => ({...state, currentCityName: payload.cityName})
}, defaultState)


export default reducer;