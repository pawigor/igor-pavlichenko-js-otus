import React from 'react'

interface IProps {
    cities: string[]
    onAddCity: Function,
    onChooseCity: Function
}

interface IState {
}

export class CityList extends React.Component<IProps, IState> {
    private readonly cityRef: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.cityRef = React.createRef();
    }

    handleClick() {
        if (this.cityRef.current) {
            const city = this.cityRef.current.value;
            this.props.onAddCity(city);
            this.cityRef.current.value = '';
        }
    };

    render() {
        return <div>
            <input ref={this.cityRef} type="text" defaultValue={'London'}/>
            <button onClick={this.handleClick}>Ok</button>
            <ul>
                {this.props.cities.map((city, i) => (<li key={i}>
                    <button onClick={() => this.props.onChooseCity(i)}>{city}</button>
                </li>))}
            </ul>
        </div>;
    }
}