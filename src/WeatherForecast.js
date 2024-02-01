import React, { useState } from "react";
import "./WeatherForecast.css";
import Icon from "./Icon";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="WeatherForecast forecastContainer">
        <h4>Weekly Forecast</h4>
        <ForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    const apiKey = "6bfa54f242cbb59343d4e58db578dc61";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
