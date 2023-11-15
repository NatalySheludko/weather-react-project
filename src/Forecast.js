import React from "react";


import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div class="col-2">
          <div class="weekdays-forecast box">Tue</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span class="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span class="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div class="col-2">
          <div class="weekdays-forecast box">Wed</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span class="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span class="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div class="col-2">
          <div class="weekdays-forecast box">Thu</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span class="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span class="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div class="col-2">
          <div class="weekdays-forecast box">Fri</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span class="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span class="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div class="col-2">
          <div class="weekdays-forecast box">Sat</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span class="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span class="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
        <div class="col-2">
          <div class="weekdays-forecast box">Sun</div>
          <div className="forecast-box">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              width="80"
            />
            <br />
            <span class="temperature-forecast-day">
              12<span className="degree">°</span>
            </span>{" "}
            <span class="temperature-forecast-night">
              6<span className="degree">°</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
