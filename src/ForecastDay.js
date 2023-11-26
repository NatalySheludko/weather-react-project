import React from "react";

import WeatherAnimatedIcon from "./WeatherAnimatedIcon";

export default function ForecastDay(props) {
    function maxTemperature() {
        const temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
    }
    function minTemperature() {
      const temperature = Math.round(props.data.temperature.minimum);
      return `${temperature}`;
    }

    function day() {
        const date = new Date(props.data.time * 1000); 
        const day = date.getDay(); 
         const days = [
           "Sun",
           "Mon",
           "Tue",
           "Wed",
           "Thu",
           "Fri",
           "Sat",
         ];
        
        return days[day];
    }
    return (
      <div>
        <div className="weekdays-forecast box">
          {" "}
          {day()}
        </div>
        <div className="forecast-box">
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