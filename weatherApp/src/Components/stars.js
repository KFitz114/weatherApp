import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './stars.css';

function Stars() {
    const[stars, setStars] = useState ([]);
    useEffect (() => {
        axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=03bce392a3c04b89b070db5eb9e2cb81&location=Connecticut,%20US`)
        .then(res => {
            console.log(res.data);
            setStars(res.data);
        })
    }, [])
    console.log('Stars ', stars);
    let items = [];
    if(typeof stars.Location!='undefined') {
        items = stars.Location.map(el => {
            console.log('el.location', el.Location);
            return(
                    <td> {stars.moon_altitude} </td>
            )
    })}
    return(
        <div className="stars">
            <div id="flex">
                <div id= 'moon'>
                <h4> Moon chart </h4>
                    <table id="tableStars">
                        <thead>
                            <th> Moon Altitude</th>
                            <th> Moon Azimuth </th>
                            <th> Moon Distance </th>
                            <th> Moonrise </th>
                            <th> Moonset </th>
                        </thead>
                        <tbody>
                            <td> {stars.moon_altitude} </td>
                            <td> {stars.moon_azimuth} </td>
                            <td> {stars.moon_distance} </td>
                            <td> {stars.moonrise} </td>
                            <td> {stars.moonset} </td>
                        </tbody>
                    </table>
                </div>    
                <br />
                <div id = 'sun'>
                    <h4> Sun Chart </h4>
                    <table id = 'sunTable'>
                        <thead>
                            <th> Sun Altitude </th>
                            <th> Sun Azimuth </th>
                            <th> Sun Distance </th>
                            <th> Sunrise </th>
                            <th> Sunset </th>
                        </thead>
                        <tbody>
                            <td> {stars.sun_altitude} </td>
                            <td> {stars.sun_azimuth} </td>
                            <td> {stars.sun_distance} </td>
                            <td> {stars.sunrise} </td>
                            <td> {stars.sunset} </td>
                        </tbody>
                    </table>
                    <p id = 'starsNote'> A note about Azimuth: The azimuth angle is 
                    the compass direction from which the sunlight is coming. 
                    At solar noon, the sun is always directly south in the northern 
                    hemisphere and directly north in the southern hemisphere.</p>
                </div>    
            </div>
        </div>
    )
}

export default Stars;