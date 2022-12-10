import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fca2b72719fce9e42d08d29dfc88f436
&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
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
  );
  if (loaded) {
    return (
      <div className="App">
        <div className="card">
          <div className="card-body">
            {form}
            <div className="btn-group btn-group-sm" role="group">
              <button type="button" className="btn btn-outline-primary">
                fahrenheit
              </button>
              <button type="button" className="btn btn-outline-primary">
                celsius
              </button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h1 className="city">{city}</h1>
                  <p className="date"></p>
                  <span className="today-temp"> </span>
                  <span className="units"> {weather.temperature} °C</span>
                  <p className="high-low">
                    <span className="current-max"></span>° /
                    <span className="current-min"></span>°
                  </p>
                </div>
                <div className="col-4">
                  <img className="icon" src={weather.icon} alt="sun icon" />
                  <ul className="wind">
                    <li>
                      <span className="description">{weather.description}</span>
                    </li>
                    <li>
                      Humidity:
                      <span className="humidity">{weather.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span className="wind">{weather.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr />
            <div class="weather-forecast" className="forecast"></div>
          </div>
        </div>
        <div class="github">
          <a
            href="https://github.com/gingerfarrar/Weather-App"
            rel="noopener noreferrer"
            target="_blank"
          >
            View Source Code On GitHub
          </a>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
