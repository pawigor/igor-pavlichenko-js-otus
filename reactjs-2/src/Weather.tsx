import React, {Component} from 'react';
import {CityList} from "./CityList";
import {WeatherInfo} from "./WeatherInfo";

interface IProps {
    data: any
}

interface IState {
    cities: string[],
    currentCityIndex: number,
    weather: WeatherData | null
}

export class Weather extends Component<IProps, IState> {
    state: IState;
    private style: any;

    constructor(props: IProps) {
        super(props);
        console.log(props)
        this.state = {currentCityIndex: 0, weather: null, cities: ['Moscow']}
        this.addCity = this.addCity.bind(this);
        this.chooseCity = this.chooseCity.bind(this);
        this.style = {display: 'flex'}
    }

    chooseCity(currentCityIndex: number) {
        this.setState({currentCityIndex, weather: this.props.data[this.state.cities[currentCityIndex]]});
    }

    addCity(city: string) {
        const cities = this.state.cities;
        cities.push(city);
        this.setState({cities})
        this.chooseCity(cities.length - 1)
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