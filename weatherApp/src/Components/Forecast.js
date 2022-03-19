//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './forecast.css';

function Forecast() {
    const[weather, setWeather] = useState ({})
    const [zip, setZip]  = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=a8cfaf78d2ccf99d02f195059cc8f62d`

    const searchZip = (event) => {
        if (event.key === 'Enter') {
        axios.get(url).then((response) => {
            setWeather(response.data)
            console.log(response.data)
        }) 
        setZip('')
        }
    }   
            return(
                    <div className ="forecast">
                        <div className="flex-container">
                            <div className="container">
                                <div className="search">
                                    <input
                                    value={zip}
                                    onChange={event => setZip(event.target.value)}
                                    onKeyPress={searchZip}
                                    placeholder="Enter zipcode"
                                    type="text" />
                                </div>
                                <div className="results">
                                    <h1 className='location'> {weather.name} </h1>  
                                    <div className = 'temp'> 
                                        {weather.main ?
                                    <p> {weather.main.temp.toFixed()} F </p> : null}
                                    </div>
                                    <div className="flex-additional-weather">
                                        <div className='additionalWeather'>
                                            {weather.main ? <p> Humidity: {weather.main.humidity}% </p> : null}
                                        </div>
                                        <div className="additionalWeather">
                                            {weather.main ? <p> High: {weather.main.temp_max.toFixed()} F </p> : null}
                                        </div>
                                        <div className="additionalWeather">
                                        {weather.main ? <p> High: {weather.main.temp_min.toFixed()} F </p> : null}
                                        </div>
                                        {/* <div className = 'additionalWeather'> 
                                            <p> Currently: {data.main} </p>
                                            <p> Humidty: {data.main.humidity}% </p>
                                            <p> Wind Speed: {data.wind.speed} mph </p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )    
}

export default Forecast;