import "./WeatherTemperature.css";

import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="current-temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
