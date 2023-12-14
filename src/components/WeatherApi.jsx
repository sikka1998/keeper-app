import React, { useState, useEffect } from "react";
import axios from 'axios';


function WeatherApi(){

    const [weatherData,setWeatherData] = useState([]);
    
            useEffect(() => { 
                async function fetchData() {
                 await axios.get('https://api.open-meteo.com/v1/forecast?latitude=12.92&longitude=77.66&hourly=temperature_2m&current_weather=true&timezone=auto')
                .then(response => {
                    setWeatherData(response.data.current_weather)
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                })}fetchData();
            }, []);

            return(
                <div>
                    <h4>Weather :  {weatherData.temperature}°C</h4>
                </div>
            );              
}

export default WeatherApi;