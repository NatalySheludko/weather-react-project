import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  

  if (loaded) {
    console.log(forecast);

return (
  <div className="Forecast">
    <div className="row">
      <div className="col-2">
        <ForecastDay data={ forecast[0]} />
      </div>
    </div>
  </div>
);








    
  } else {
    
    const apiKey = "6fa3cb02fc6ct4bd31ab65905b1ado1a";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=${apiKey}&units=metric`;
    //const latitude = props.coordinates.latitude;
    //const longitude = props.coordinates.longitude;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
