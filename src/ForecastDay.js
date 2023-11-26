import React from "react";

import WeatherAnimatedIcon from "./WeatherAnimatedIcon";

export default function ForecastDay(props) {

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="weekdays-forecast"> {day()}</div>
      <div>
        <WeatherAnimatedIcon code={props.data.condition.icon} size={32} />
        <br />
        <span className="temperature-forecast-day">
          {maxTemperature()}
          <span className="degree">°</span>
        </span>{" "}
        <span className="temperature-forecast-night">
          {minTemperature()}
          <span className="degree">°</span>
        </span>
      </div>     
    </div>   
  );
}
