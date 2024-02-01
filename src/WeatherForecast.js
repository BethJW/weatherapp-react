import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);

    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast forecastContainer">
        <div className="row">
          <h4>Weekly Forecast</h4>
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2 icons" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
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
