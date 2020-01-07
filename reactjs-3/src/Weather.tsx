import React, {Component} from 'react';
import {CityList} from "./CityList";
import {WeatherInfo} from "./WeatherInfo";

import {connect} from 'react-redux'

interface IProps {
    cities: string[],
    currentCityName: string,
    addCity: (cityName: string) => void,
    chooseCity: (cityName: string) => void,
    weather: any,
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
        this.state = {currentCityName: props.currentCityName, weather: null, cities: props.cities}
        this.style = {display: 'flex'}
    }

    render() {
        return (<div style={this.style}>
            <CityList
                cities={this.props.cities}
                currentCityName={this.props.currentCityName}
                onChooseCity={this.props.chooseCity}
                onAddCity={this.props.addCity}
            />
            <WeatherInfo
                weather={this.props.weather}
            />
        </div>);
    }
}

const mapStateToProps = state => {
    const {addCity, chooseCity, currentCityName, cities, weather} = state
    console.log(state)
    return {
        addCity,
        chooseCity,
        currentCityName,
        cities,
        weather
    }
}

export default connect(mapStateToProps)(Weather)