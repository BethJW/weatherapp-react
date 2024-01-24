import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather container">
      <div className="row row-container">
        <div className="col-5">
          <h1 className="city">Miami</h1>
          <ul>
            <li>
              <span className="date">12/11/00 </span>
              <br /> <span className="time">10:55</span>
            </li>
            <li className="currentTemp"> 25°C</li>
            <li className="currentCond">Cloudy</li>
          </ul>
        </div>
        <div className="col-2 icon">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Weather_icon_-_sunny.svg/512px-Weather_icon_-_sunny.svg.png"
            alt="sun"
          />
        </div>
        <div className="col-5">
          <ul className="weatherData">
            <li className="weatherData">Precipitation: 10</li>
            <li className="weatherData">Humidity: 10</li>
            <li className="weatherData">WindSpeed: 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
