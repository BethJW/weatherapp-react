import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="row row-container">
      <div className="col-5">
        <h1 className="city">{props.data.city}</h1>
        <ul>
          <li>
            <span className="date">
              <FormattedDate date={props.data.date} />
            </span>
            <br />{" "}
            <span className="time">
              <FormattedTime date={props.data.time} />
            </span>
          </li>
          <li className="currentTemp">
            {Math.round(props.data.temperature)}°C
          </li>
          <li className="currentCond">{props.data.description}</li>
        </ul>
      </div>
      <div className="col-2 icon">
        <img src={props.data.icon} />
      </div>
      <div className="col-5">
        <ul className="weatherData">
          <li className="weatherData">Visibility: {props.data.visibility}</li>
          <li className="weatherData">Humidity: {props.data.humidity}%</li>
          <li className="weatherData">WindSpeed: {props.data.wind}mph</li>
          <li className="weatherData">Feels Like: {props.data.feelsLike}°c</li>
        </ul>
      </div>
    </div>
  );
}
