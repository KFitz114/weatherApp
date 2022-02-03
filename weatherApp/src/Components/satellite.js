// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './satellite.css';

function Satellite() {
    const [satellite, setSatellite] = useState ([1]);
    useEffect (()=> {
        axios.get('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles')
        .then(res => {
            console.log(res.data);
            setSatellite(res.data);
        })
    }, [])
    console.log('Satellite: ', satellite);
    let item = satellite.map(el => {
        return(
            <tr>
                <td> {el.name} </td>
                <td> {el.id} </td>
                <td> {el.latitude} </td>
                <td> {el.longitude} </td>
                <td> {el.altitude} </td>
                <td> {el.velocity} </td>
                <td> {el.visibility} </td>
                <td> {el.footprint} </td>
                <td> {el.timestamp} </td>
                {/* <td> {daynum} </td>
                <td> {solar_lat} </td>
                <td> {solar_lon} </td>
                <td> {units} </td> */}
            </tr>
        )
    })
    return(
        <div className="satellite">
            <p className = 'satPara'> Where is the ISS? </p>
            <div id="flex">
                <table id="tableIss">
                    <thead>
                        <th> Name</th>
                        <th> ID </th>
                        <th> Latitude </th>
                        <th> Longitude </th>
                        <th> Altitude </th>
                        <th> Velocity </th>
                        <th> Visibility </th>
                        <th> Footprint </th>
                        <th> Time stamp </th>
                        {/* <th> Day Number </th>
                        <th> Solar Lattitude </th>
                        <th> Solar Longitude </th>
                        <th> Kilometers </th> */}
                    </thead>
                    <tbody>
                        {item}
                    </tbody>
                </table> 
            </div>
        </div>
    )
}

export default Satellite;