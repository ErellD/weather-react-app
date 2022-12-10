import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="City">
        <div className="city-name">{props.data.city}</div>
        <div className="date">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="description text-capitalize">
          {props.data.description}
        </div>
      </div>
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <span className="current-temp">{props.data.currentTemp}</span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <img src={props.data.imgUrl} alt="cloudy" className="icon" />{" "}
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-6">
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="wind">Wind: {props.data.wind}km/h</div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
