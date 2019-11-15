interface WeatherData {
    coord: {
        lon: number,
        lat: number
    },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    },
    main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number,
    },
    wind: {
        speed: number,
        deg: number
    }
}