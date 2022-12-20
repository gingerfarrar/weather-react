import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherInfo">
        <div className="btn-group btn-group-sm" role="group">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={convertToF}
          >
            fahrenheit
          </button>
          <button type="button" className="btn btn-outline-primary">
            celsius
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="city">{props.data.city}</h1>
              <p className="date">
                <FormattedDate date={props.data.date} />
              </p>

              <div className="WeatherTemperature">
                <span className="today-temp">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="units">°C</span>
              </div>

              <p className="high-low">
                <span className="current-max">
                  {Math.round(props.data.max)}
                </span>
                ° /
                <span className="current-min">
                  {Math.round(props.data.min)}
                </span>
                °
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
  } else {
    let fahrenheit = (props.data.temperature * 9) / 5 + 32;
    let max = (props.data.max * 9) / 5 + 32;
    let min = (props.data.min * 9) / 5 + 32;
    return (
      <div className="WeatherInfo">
        <div className="btn-group btn-group-sm" role="group">
          <button type="button" className="btn btn-outline-primary">
            fahrenheit
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={convertToC}
          >
            celsius
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="city">{props.data.city}</h1>
              <p className="date">
                <FormattedDate date={props.data.date} />
              </p>

              <div className="WeatherTemperature">
                <span className="today-temp">{Math.round(fahrenheit)}</span>
                <span className="units">°F</span>
              </div>

              <p className="high-low">
                <span className="current-max">{Math.round(max)}</span>° /
                <span className="current-min">{Math.round(min)}</span>°
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
}
