import React from "react";

import "./WeatherInfo.css";

import WeatherAnimatedIcon from "./WeatherAnimatedIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="heading">
        <span className="heading-text">Result:</span> {props.data.city}
      </h2>
      <div className="row">
        <div className="col-4">
          <div className="main-box">
            <div className="weather-icon text-capitalize">
              <WeatherAnimatedIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
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
        <div className="col-4">
          <div className="description-box">
            <ul className="weather-menu">
              <li>
                <h1 className="main-heading">Weather</h1>
              </li>
              <li>
                <FormatDate time={props.data.time} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}