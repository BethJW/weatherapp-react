import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./Weather.css";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      visibility: response.data.visibility,
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Weather_icon_-_sunny.svg/512px-Weather_icon_-_sunny.svg.png",
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="search-form">
            <input
              type="search"
              placeholder="type a city.."
              className=" search-bar w-75"
            />
            <input type="submit" value="search" className="w-25 search-btn" />
          </form>

          <div className="row row-container">
            <div className="col-5">
              <h1 className="city">{weatherData.city}</h1>
              <ul>
                <li>
                  <span className="date">
                    <FormattedDate date={weatherData.date} />
                  </span>
                  <br />{" "}
                  <span className="time">
                    <FormattedTime date={weatherData.time} />
                  </span>
                </li>
                <li className="currentTemp">
                  {Math.round(weatherData.temperature)}°C
                </li>
                <li className="currentCond">{weatherData.description}</li>
              </ul>
            </div>
            <div className="col-2 icon">
              <img src={weatherData.icon} />
            </div>
            <div className="col-5">
              <ul className="weatherData">
                <li className="weatherData">
                  Visibility: {weatherData.visibility}
                </li>
                <li className="weatherData">
                  Humidity: {weatherData.humidity}%
                </li>
                <li className="weatherData">
                  WindSpeed: {weatherData.wind}mph
                </li>
                <li className="weatherData">
                  Feels Like: {weatherData.feelsLike}°c
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let city = "Crewe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
