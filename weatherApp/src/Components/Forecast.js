//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './forecast.css';

function Forecast() {;
    const[forecast, setForecast] = useState ([]);
    const [zip, setState]  = useState('20001');
    const uriEncodedZip = encodeURIComponent(zip);
    useState (() => {
        // handleClick();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            console.log("RES: ", res.data);
            setForecast(res.data);
        })
    }, [zip])
    console.log('Forecast ', forecast);
    let rows = [];
    console.log("FORECAST>LENGTH: ", forecast.length);
    if(typeof forecast.weather !='undefined') {
        console.log("IN IF");
        rows = forecast.weather.map(el => {
            console.log("el.main", el.main);
            return(
                    <div className ="results">
                        <h1 className='welcome'> {forecast.name} </h1>  
                        <p className = 'temp'> {forecast.main.temp} F </p>
                        <div className = 'additionalWeather'> 
                            <p>Currently: {el.main} </p>
                            <p> Humidty: {forecast.main.humidity}% </p>
                            <p> Wind Speed: {forecast.wind.speed} mph </p>
                        </div>
                    </div>
            )        
        })
    if (typeof forecast.weather == 'undefined'){
        return false;
    }
    }
    console.log("Rows:", rows);
console.log('Forecast: ', forecast);
    return(
        <div className='forecast'>
            {/* <form className = "formStyle">
                <input type="text" placeholder="Enter Zipcode" value={this.state.value} maxLength="10" onSubmit={this.changeZip}/>
                <input type="text"  onChange={this.handleChange} />
                <input type = "button" value = "Alert the text input" onClick={this.handleClick}/>
            </form> */}
            <div className='flex'>
                {rows}
            </div>   
        </div>
    )
}

export default Forecast;