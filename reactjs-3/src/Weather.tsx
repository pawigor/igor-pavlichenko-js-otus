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
    private readonly style: any;

    constructor(props: IProps) {
        super(props);
        this.state = {currentCityName: props.currentCityName, weather: null, cities: props.cities};
        this.style = {display: 'flex'}
    }

    render() {
        return (<div style={this.style}>
            <CityList
                cities={this.props.cities}
                currentCityName={this.props.currentCityName}
                chooseCity={this.props.chooseCity}
                addCity={this.props.addCity}
            />
            <WeatherInfo
                weather={this.props.weather}
            />
        </div>);
    }
}

const mapStateToProps = (state: IState) => state;


export default connect(mapStateToProps)(Weather)
