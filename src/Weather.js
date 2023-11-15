import React, { useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import axios from "axios";

import Forecast from "./Forecast";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function Weather(props) {
  const [showWeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
      temperature: Math.round(response.data.temperature.current),
      feels_like: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
    });
  }

  if (showWeatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-line">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              {" "}
              <input type="submit" value="Search" className="btn btn-danger" />
            </div>
          </div>
        </form>
        <h2 className="heading">
          <span className="heading-text">Result:</span> {props.defaultCity}
        </h2>
        <div className="row">
          <div className="col-4 box">
            <div className="icon-box">
              <img
                src={showWeatherData.iconUrl}
                alt={showWeatherData.description}
                width="120"
                className="weather-icon text-capitalize"
              />
              <span className="current-temperature">
                {showWeatherData.temperature}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>

          <div className="col-4 box">
            <div className="feels-like-box">
              <ul className="weather-menu">
                <li>
                  Feels like: {showWeatherData.feels_like}
                  <span className="degree-color">°</span>
                </li>
                <li>Humidity: {showWeatherData.humidity}%</li>
                <li>Wind: {showWeatherData.wind} km/h</li>
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
                  <FormatDate date={showWeatherData.date} />
                </li>
                <li className="text-capitalize">
                  {showWeatherData.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "6fa3cb02fc6ct4bd31ab65905b1ado1a";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    );
  }
}
