import React from "react";
import "./WeatherForecast.css";
import Icon from "./Icon";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast forecastContainer">
      <h4>Weekly Forecast</h4>
      <div className="row days">
        <div className="col-2">Sun</div>
      </div>
      <div className="row icons">
        <div className="col-2 f-icon">
          <Icon code="01d" />
        </div>
      </div>
      <div className="row temperature">
        <div className="col-2">
          30/<span className="max">50</span>
        </div>
      </div>
    </div>
  );
}
