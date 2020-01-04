import React, {Component} from 'react';
import {CityList} from "./CityList";
import {WeatherInfo} from "./WeatherInfo";

interface IProps {
    data: any
}

interface IState {
    cities: string[],
    currentCityName: string,
    weather: WeatherData | null
}

export class Weather extends Component<IProps, IState> {
    state: IState;
    private style: any;

    constructor(props: IProps) {
        super(props);
        console.log(props)
        this.state = {currentCityName: 'Moscow', weather: null, cities: ['Moscow']}
        this.addCity = this.addCity.bind(this);
        this.chooseCity = this.chooseCity.bind(this);
        this.style = {display: 'flex'}
    }

    chooseCity(currentCityName: string) {
        this.setState({currentCityName, weather: this.props.data[currentCityName]});
    }

    addCity(cityName: string) {
        const cities = this.state.cities;
        cities.push(cityName);
        this.setState({cities})
        this.chooseCity(cityName)
    }

    render() {
        return (<div style={this.style}>
            <CityList
                cities={this.state.cities}
                onChooseCity={this.chooseCity}
                onAddCity={this.addCity}
            />
            <WeatherInfo
                weather={this.state.weather}
            />
        </div>);
    }
}