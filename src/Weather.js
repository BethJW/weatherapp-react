import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.city);
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
      icon: response.data.weather[0].icon,
    });

    setReady(true);
  }
  function search() {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="type a city.."
              className=" search-bar w-75"
              onChange={handleCity}
            />
            <input type="submit" value="search" className="w-25 search-btn" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
