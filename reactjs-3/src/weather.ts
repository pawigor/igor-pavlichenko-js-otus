import {createActions, handleActions} from 'redux-actions'

export interface IState {
    title: string,
    cities: Array<string>,
    currentCityName?: string
    weather?: WeatherData,
    data: any
}

export interface IPayload {
    type: string,
    cityName: string,
    weather?: any
}

//payload creator
export const Actions = createActions({
    addCity: (cityName: string) => ({cityName}),
    chooseCity: (cityName: string) => ({cityName}),
    fetchWeather: (cityName: string) => {
        console.log(arguments)
        return ({cityName});
    },
    storeWeather: (cityName: string, weather: any) => ({cityName, weather})
});

const {addCity, chooseCity, storeWeather} = Actions;

export const fetchWeather = (cityName: string) => dispatch => {
    console.log(dispatch)
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=e21fcbec2669a67c232f5d27a7c3c7f7').then((data: Response) => {
            data.json().then(console.log)
            return dispatch(storeWeather({cityName, weather: data}));
        }
    ).catch(error => {
        console.error(error)
        return dispatch(storeWeather({
            cityName,
            weather: {
                "coord": {"lon": -0.13, "lat": 51.51},
                "weather": [{"id": 300, "main": "Drizzle", "description": "light intensity drizzle", "icon": "09d"}],
                "base": "stations",
                "main": {"temp": 280.32, "pressure": 1012, "humidity": 81, "temp_min": 279.15, "temp_max": 281.15},
                "visibility": 10000,
                "wind": {"speed": 4.1, "deg": 80},
                "clouds": {"all": 90},
                "dt": 1485789600,
                "sys": {
                    "type": 1,
                    "id": 5091,
                    "message": 0.0103,
                    "country": "GB",
                    "sunrise": 1485762037,
                    "sunset": 1485794875
                },
                "id": 2643743,
                "name": "London",
                "cod": 200
            }
        }));
    })
}

const defaultState: IState = {
    title: 'Weather app',
    cities: [],
    currentCityName: undefined,
    weather: undefined,
    data: {}
};

const reducer = handleActions<IState, IPayload>({
    storeWeather: (state, {payload}) => {
        console.log(payload)
        const {data} = state
        data[payload.cityName] = payload.weather
        return {...state, data}
    },
    addCity: (state, {payload}) => {
        const {cities} = state;
        if (payload.cityName != undefined) {
            cities.push(payload.cityName)
        }
        return {...state, cities, currentCityName: payload.cityName}
    },
    chooseCity: (state, {payload}) => {
        return ({...state, currentCityName: payload.cityName});
    }
}, defaultState);


export default reducer;
