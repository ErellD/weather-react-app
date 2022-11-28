import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    currentTemp: "18",
    imgUrl: " https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    humidity: "70",
    wind: "50",
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <span className="current-temp">{weatherData.currentTemp}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <img src={weatherData.imgUrl} alt="cloudy" className="icon" />{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-6">
          <div className="humidity">Humidity: {weatherData.humidity}%</div>
          <div className="wind">Wind: {weatherData.wind}km/h</div>
        </div>
      </div>{" "}
    </div>
  );
}
