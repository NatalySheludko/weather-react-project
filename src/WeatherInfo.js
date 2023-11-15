import React from "react";


import Forecast from "./Forecast";
import FormatDate from "./FormatDate";
import WeatherAnimatedIcon from "./WeatherAnimatedIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="heading">
        <span className="heading-text">Result:</span> {props.data.city}
      </h2>
      <div className="row">
        <div className="col-4 box">
          <div className="icon-box">
            <div className="weather-icon text-capitalize">
              <WeatherAnimatedIcon code={props.data.icon} />
            </div>
            <span className="current-temperature">
              {props.data.temperature}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="col-4 box">
          <div className="feels-like-box">
            <ul className="weather-menu">
              <li>
                Feels like: {props.data.feels_like}
                <span className="degree-color">°</span>
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-4 box">
          <div className="description-box">
            <ul className="weather-menu">
              <li>
                <h1 className="main-heading">Weather</h1>
              </li>
              <li>
                <FormatDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
/*<img
              src={props.data.iconUrl}
              alt={props.data.description}
              width="120"
              className="weather-icon text-capitalize"
            */
