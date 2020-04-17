import React, { useState, useEffect } from 'react'
import axios from "axios";

const CurrentWeather = ({ country }) => {
    const [weather, setWeather] = useState({
        temperature: 0,
        weather_icons: [],
        wind_speed: 0,
        wind_dir: 0
    });

 const cityName = country.capital

    useEffect(() => {
        axios
            .get(
                "http://api.weatherstack.com/current?access_key=89e7fab95541aae74b45e13e2c4d4798&query=" +
                cityName
            )
            .then(response => setWeather(response.data.current))
    },)

    return (
        <div>
            <h2>
                Weather in {country.name}
            </h2>
            <strong>
                temperature: </strong>
                {weather.temperature} Celcius
           <br/>
            <img src={weather.weather_icons[0]} alt="" />
            <br />
            <strong>
                wind:</strong> {weather.wind_speed} kph, direction {weather.wind_dir}
                

        </div>
    )
}
export default CurrentWeather;
