import React, {ChangeEvent} from 'react'

interface IProps {
    cities: string[],
    currentCityName: string,
    addCity: Function,
    chooseCity: Function
}

interface IState {
    cityName: string
}

export class CityList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {cityName: ''}
    }

    handleClick() {
        if (this.state.cityName.length > 0) {
            this.props.addCity(this.state.cityName);
        }
    };

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        const cityName = event.target.value
        this.setState(() => ({cityName}))
    }

    render() {
        return <div>
            <input value={this.state.cityName} type="text" onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Ok</button>
            <ul>
                {(console.log(this.props)||true) && this.props.cities.map(city => (<li key={city}>
                    <button onClick={() => this.props.chooseCity(city)}>{this.props.currentCityName === city &&
                    <i>*</i>} {city}</button>
                </li>))}
            </ul>
        </div>;
    }
}
