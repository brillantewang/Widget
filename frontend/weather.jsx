import React from 'react';

export class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { weatherInfo: null };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.getWeatherInfo(position);
        }, (err) => {
            console.log(err);
        });
    }

    getWeatherInfo(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const request = new XMLHttpRequest();
        request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=edbe7261dc4a4c9b48b91d7326cb1841`, true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                const resp = request.responseText;
                const respJSON = JSON.parse(resp);
                this.setState({weatherInfo: respJSON});
            } else {
                console.log("ERROR MY bRUH??????")
            }
        };
        
        request.onerror = () => {
            console.log("ERROR MY bRUH")
        };
        
        request.send();
    }

    render() {
        return (
            <div className="weather">
                <h1>Weather</h1>
                <div className="weather-container">
                    {
                        this.state.weatherInfo ? <div>
                            <div className="weather-item">
                                <strong>{JSON.stringify(this.state.weatherInfo.name)}</strong>
                            </div>
                            <div className="weather-item">
                                <strong>{JSON.stringify(this.state.weatherInfo.main.temp)}</strong>
                            </div>
                        </div> : 
                        "loading"
                    }
                </div>
            </div>
        );
    }
}

export default Weather;
