import React, { useState } from "react";
import "./Container.css";
import "./CurrentInfo.css";
import "./Forecast.css";
import "./SearchBar.css";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Weather() {
  /* States to reload information */
  const [weatherData, showWeatherData] = useState({ ready: false });
  /* Function to run API call */
  function showTemperature(response) {
    console.log(response.data);
    showWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday 7:00",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      emojiURL: "http://openweathermap.org/img/wn/image.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      /* Information display */
      <Container fluid="md" className="Container">
        <Row md={2}>
          <Col>
            <div className="col-md currentweather">
              <p className="maincity">{weatherData.city}</p>
              <br />
              <p className="time">{weatherData.date}</p>
              <br />
              <p className="bigtext">
                {Math.round(weatherData.temperature)}{" "}
                <span className="degrees">°C / °F</span>
              </p>
              <p className="description">
                {weatherData.description}{" "}
                <img src={weatherData.emoji} alt="Emoji" />
              </p>
              <p className="windspeed">Wind Speed: {weatherData.wind} km</p>
              <p className="precipitation">
                Humidity: {weatherData.humidity} %
              </p>
            </div>
          </Col>
          <Col>
            <div className="Forecast col-md">
              <p className="fiveday">Hourly Forecast</p>

              <p className="futuretemp">temp°C emoji at time</p>

              <p className="futuretemp">temp°C emoji at time</p>

              <p className="futuretemp">temp°C emoji at time</p>

              <p className="futuretemp">temp°C emoji at time</p>

              <p className="futuretemp">temp°C emoji at time</p>

              <p className="futuretemp">temp°C emoji at time</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="row">
              <div className="col-12">
                <form className="SearchBar">
                  <input
                    className="form-control form-control-lg"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off"
                  />

                  <button
                    className="btn btn-dark btn btn-primary btn-lg"
                    type="submit"
                    value="Find A City"
                    autoFocus="on"
                  >
                    Find A City
                  </button>

                  <button
                    className="btn btn-dark btn btn-primary btn-lg"
                    type="submit"
                    value="Current Location"
                  >
                    Current Location
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    /* API Information */
    let city = "Vancouver";
    let apiKey = "82748eb647aa94c9acf7aa6a08000727";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showTemperature);

    return "Loading...";
  }
}
