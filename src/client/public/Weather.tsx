import * as React from 'react';
import { json } from '../utils/api';

interface IWeatherProps { }

interface IWeatherState {
    temperature: number;
    humidity: number;
    wind: number;
    name: string;
    description: string;
}

const API_KEY = process.env.WEATHER_API;
// console.log(config.weather.api_key);

export default class Form extends React.Component<IWeatherProps, IWeatherState> {

    constructor(props: IWeatherProps) {
        super(props);
        this.state = {
            temperature: undefined,
            humidity: undefined,
            wind: undefined,
            name: undefined,
            description: undefined
        };
    }

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        try {

            const api_call = await fetch('api/weather');
            const data = await api_call.json();
            console.log(data);
            this.setState({
                temperature: data.main.temp = Math.floor(9 / 5 * (data.main.temp - 273) + 32),
                humidity: Math.floor(data.main.humidity),
                wind: data.wind.speed = Math.floor(data.wind.speed * (3600/1609.344)),
                name: data.name,
                description: data.weather[0].description
            });
        } catch (e) {
            throw e;
        }
    }

    render() {
        return (
            <>
                <div className="col-sm-12">
                    <form
                        className="form-group mt-3 border border-info rounded p-3 bg-dark"
                        onSubmit={this.handleSubmit}
                    >
                        <label className="text-white">Zipcode</label>
                        <input
                            type="number"
                            name="zipcode"
                            placeholder="Zipcode..."
                            className="input-group my-1 p-1 border border-info bg-light"
                        />
                        <button className="btn btn-info mt-3">Get Weather</button>
                    </form>
                    <div className="card m-2 border border-info bg-dark">
                        <div className="card-body">
                            <div className="card-title text-white font-weight-bold border border-info border-top-0 border-left-0 border-right-0">{this.state.name} Weather</div>
                            <div className="text text-white">Temperature: {this.state.temperature}&#8457;</div>
                            <div className="text text-white">Humidity: {this.state.humidity}%</div>
                            <div className="text text-white">Wind: {this.state.wind} mph</div>
                            <div className="text text-white">Description: {this.state.description}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}