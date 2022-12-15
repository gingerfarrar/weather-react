import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="city">{props.data.city}</h1>
            <p className="date">
              <FormattedDate date={props.data.date} />
            </p>

            <WeatherTemperature celsius={props.data.temperature} />

            <p className="high-low">
              <span className="current-max"></span>° /
              <span className="current-min"></span>°
            </p>
          </div>
          <div className="col-4">
            <WeatherIcon code={props.data.icon} />

            <ul className="wind">
              <li>
                <span className="description">{props.data.description}</span>
              </li>
              <li>
                Humidity:
                <span className="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
