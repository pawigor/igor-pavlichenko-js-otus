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
                <ul>{
                    this.props.weather && (
                        <li>Temperature: {this.props.weather.main.temp}</li>
                    )}
                </ul>
            </div>
        );
    }
}