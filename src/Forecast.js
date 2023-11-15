import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="weekdays-forecast box">Tue</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span className="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span className="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weekdays-forecast box">Wed</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span className="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span className="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weekdays-forecast box">Thu</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span className="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span className="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weekdays-forecast box">Fri</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span className="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span className="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weekdays-forecast box">Sat</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span className="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span className="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weekdays-forecast box">Sun</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span className="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span className="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
