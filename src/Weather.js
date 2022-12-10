import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      currentTemp: Math.round(response.data.main.temp),
      ready: true,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="City">
          <div className="city-name">{weatherData.city}</div>
          <div className="date">
            <FormattedDate />
          </div>
        </div>
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
      </div>
    );
  } else {
    let city = props.defaultCity;
    let apiKey = "6782aad50c1b70af7b4d49bc3f661348";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
