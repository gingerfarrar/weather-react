import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fca2b72719fce9e42d08d29dfc88f436
&units=metric`;
    axios.get(url).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                onChange={updateCity}
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
              <button type="button" className="btn btn-success">
                Current
              </button>
            </form>

            <WeatherInfo data={weather} />
            <hr />
            <WeatherForecast />
          </div>
        </div>
        <a
          className="github"
          href="https://github.com/gingerfarrar/weather-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Source Code On GitHub
        </a>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
