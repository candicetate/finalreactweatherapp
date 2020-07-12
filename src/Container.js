import React, { useState } from "react";
import "./Container.css";
import "./CurrentInfo.css";
import "./Forecast.css";
import "./SearchBar.css";
import CurrentInfo from "./CurrentInfo";
import DateFormat from "./DateFormat";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Weather(props) {
  /* States to reload information */
  const [weatherData, showWeatherData] = useState({ ready: false });
  /* Stores city name */
  const [city, setCity] = useState(props.defaultCity);
  /* Function to run API call */
  function showTemperature(response) {
    console.log(response.data);
    showWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      emojiURL: "http://openweathermap.org/img/wn/image.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setCity(event.target.value);
    alert(city);
  }

  if (weatherData.ready) {
    return (
      /* Information display */

      <Container fluid="md" className="Container">
        <Row md={2}>
          <Col>
            {/*Receive info from Currentinfo component*/}
            <div className="col-md currentweather CurrentInfo">
              <p className="maincity">{props.city}</p>
              <DateFormat date={props.date} className="time" />
              <p className="bigtext">
                {Math.round(props.temperature)}{" "}
                <span className="degrees">°C / °F</span>
              </p>
              <p className="description">
                {props.description} <img src={props.emoji} alt="Emoji" />
              </p>
              <p className="windspeed">
                Wind Speed: {Math.round(props.wind)} km
              </p>
              <p className="precipitation">Humidity: {props.humidity} %</p>
            </div>
            {/*Send props for weatherData*/}
            <CurrentInfo data={weatherData} />
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
                <form className="SearchBar" onSubmit={handleSubmit}>
                  <input
                    className="form-control form-control-lg"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off"
                    onChange={handleChange}
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
    let apiKey = "82748eb647aa94c9acf7aa6a08000727";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showTemperature);

    return "Loading...";
  }
}
