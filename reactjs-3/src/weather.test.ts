import weather, {Actions} from './weather'

describe('reducers', () => {
    describe('weather', () => {

        it('should Actions.addCity should return payload with cityName', () => {
            expect(Actions.addCity('London'))
                .toEqual({
                    type: Actions.addCity.toString(),
                    payload: {cityName: 'London'}
                })
        })

        it('should Actions.chooseCity should return payload with cityName', () => {
            expect(Actions.chooseCity('London'))
                .toEqual({
                    type: Actions.chooseCity.toString(),
                    payload: {cityName: 'London'}
                })
        })

        it('should provide the initial state', () => {
            expect(weather(undefined, {})).toStrictEqual({
                title: 'Weather app',
                cities: [],
                currentCityName: undefined,
                weather: undefined,
                data: {}
            })
        })

        it('should handle ADD_CITY action', () => {
            expect(weather({
                cities: [],
                currentCityName: undefined,
                weather: undefined,
                data: [],
                title: 'Test'
            }, Actions.addCity('London'))).toStrictEqual({
                cities: ['London'],
                currentCityName: 'London',
                weather: undefined,
                data: [],
                title: 'Test'
            })
        })

        it('should handle CHOOSE_CITY action', () => {
            expect(weather({
                cities: ['Moscow', 'London'],
                currentCityName: 'Moscow',
                weather: undefined,
                data: [],
                title: 'Test'
            }, Actions.chooseCity('London'))).toStrictEqual({
                cities: ['Moscow', 'London'],
                currentCityName: 'London',
                weather: undefined,
                data: [],
                title: 'Test'
            })
        })

        it('should ignore undefined actions', () => {
            expect(weather({}, {})).toStrictEqual({})
        })
    })
})