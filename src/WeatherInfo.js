import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="City">
        <div className="row">
          <div className="col-6">
            <div className="city-name">{props.data.city}</div>
          </div>
          <div className="col-6">
            <div className="date">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="description text-capitalize">
              {props.data.description}
            </div>
          </div>
        </div>
      </div>
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <WeatherTemperature celsius={props.data.currentTemp} />

            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="wind">Wind: {props.data.wind}km/h</div>
          </div>
          <div className="col-6">
            <WeatherIcon code={props.data.icon} />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
