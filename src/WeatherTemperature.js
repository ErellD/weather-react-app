import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="current-temp">{props.data.currentTemp}</span>
      <span className="units">°C</span>
    </div>
  );
}
