//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './forecast.css';

function Weather() {
    const[weather, setWeather] = useState ([]);
    useEffect (() => {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=06331&units=imperial&appid=a8cfaf78d2ccf99d02f195059cc8f62d')
        .then(res => {
            console.log("RES: ", res.data);
            setWeather(res.data);
        })
    }, [])
    console.log('Weather ', weather);
    let rows1 = [];
    console.log("Weather>LENGTH: ", weather.length);
    if(typeof weather.main !='undefined') {
        console.log("IN IF");
        rows1 = weather.forecast.map(el => {
            console.log("el.main", el.main);
            return(
                    <div className ="results">
                        {/* <label>
                            <input type='text' name='ZIP code' />
                        </label>
                            <input type='submit' value='Submit' /> */}
                        <h1 className='welcome'> {el.temp} </h1>  
                        <p className = 'temp'> {el.main} F </p>
                        <div className = 'additionalWeather'> 
                            <p>Currently: {el.main} </p>
                            {/* <p> Humidty: {weather.main.humidity}% </p>
                            <p> Wind Speed: {forecast.wind.speed} mph </p> */}
                        </div>
                    </div>
                // <tr>
                //     <td> {forecast.main.temp} </td>
                //     <td> {forecast.main.temp_max} </td>
                //     <td> {forecast.main.temp_min} </td>
                //     <td> {forecast.main.humidity} </td>
                //     <td> {el.main} </td>
                //     <td> {el.description} </td>
                //     <td> {forecast.wind.deg} </td>
                //     <td> {forecast.wind.speed} </td>
                //     <td> {forecast.visibility} </td>
                //     <td> {forecast.coord.lat} </td>
                //     <td> {forecast.coord.lon} </td>
                // </tr>
            )
        })
    }
    console.log("Rows:", rows1);
console.log('Weather: ', weather);
    return(
        <div className='forecast'>
            <div className='flex'>
                {rows1}
            </div>   
        </div>
    )
}

export default Weather;