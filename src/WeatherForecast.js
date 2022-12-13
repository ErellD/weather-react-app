import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecastData[0].dt}</div>
            <WeatherIcon code={forecastData[0].weather[0].icon} size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {forecastData[0].temp.max}
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecastData[0].temp.min}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
