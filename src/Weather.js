import React, { useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [showWeatherData, setWeatherData] = useState({ ready: false });
  const [showCity, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    /*console.log(response.data);*/
    setWeatherData({
      ready: true,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
      temperature: Math.round(response.data.temperature.current),
      feels_like: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      time: new Date(response.data.time * 1000),
      description: response.data.condition.description,
    });
  }

  function search() {
    const apiKey = "6fa3cb02fc6ct4bd31ab65905b1ado1a";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${showCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function handleCityChange(event) {
    //update city
    setCity(event.target.value);
  }

  if (showWeatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-line" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              {" "}
              <input type="submit" value="Search" className="btn btn-danger" />
            </div>
          </div>
        </form>
        <WeatherInfo data={showWeatherData} />
      </div>
    );
  } else {
    search();

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
