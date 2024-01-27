import React from "react";
import { WeatherSvg } from "weather-icons-animated";
export default function Icon(props) {
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "partlycloudy",
    "03d": "partlycloudy",
    "03n": "partlycloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "rainy",
    "11n": "rainy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };
  return <WeatherSvg state={codeMapping[props.code]} className="icon" />;
}
