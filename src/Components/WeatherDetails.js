import React from 'react';
import './WeatherDetails.css';
import Temperature from './icons/temperature.png';
import Wind from './icons/wind.png';
import Humidity from './icons/humidity.png';

const WeatherDetails=({temp, windSpeed, humidity, condition, icon})=>{
    return(
        <div className="details">
            <img src={icon} className="conditionIcon" alt=""/>
            <div className="info">{"Temperature: "}{temp}°C <img className="detailIcon" alt="" src={Temperature}/></div>
            <div className="info">{"Wind Speed: "}{windSpeed} K/hr<img alt="" className="detailIcon" src={Wind}/></div>
            <div className="info">{"Humidity: "}{humidity}%<img alt="" className="detailIcon" src={Humidity}/></div> 
            <h3>{condition}</h3>
        </div>
    );
}

export default WeatherDetails;