import React, {Component} from 'react'

interface IProps {
    weather: WeatherData | null
}

interface IState {
}

export class WeatherInfo extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.weather && (
                    <ul>
                        <li>Temperature: {this.props.weather.temp}</li>
                        <li>Pressure: {this.props.weather.pressure}</li>
                        <li>Humidity: {this.props.weather.humidity}</li>
                    </ul>
                )}
            </div>
        );
    }
}