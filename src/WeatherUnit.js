import React, { useState } from "react";
export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celcius");
  function toFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function toCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function farenheit() {
    return (props.temperature * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <li className="currentTemp">
        {Math.round(props.temperature)}
        <span className="unit">
          <span>°C</span> |
          <span>
            <a href="/" onClick={toFarenheit}>
              F°
            </a>
          </span>
        </span>
      </li>
    );
  } else {
    return (
      <li className="currentTemp">
        {Math.round(farenheit())}
        <span className="unit">
          <span>
            <a href="/" onClick={toCelcius}>
              °C
            </a>
          </span>
          <span className="break">|</span>
          <span>F°</span>
        </span>
      </li>
    );
  }
}
