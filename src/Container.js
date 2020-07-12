import React, { useState } from "react";
import "./Container.css";
import "./SearchBar.css";
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";

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
      emoji: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    /* API Information */
    let apiKey = "82748eb647aa94c9acf7aa6a08000727";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showTemperature);
  }

  if (weatherData.ready) {
    return (
      /* Information display */

      <Container fluid="md" className="Container">
        <Row md={2}>
          <Col>
            {/*Receive info from Currentinfo component*/}
            {/*Send props for weatherData to Current Info*/}
            <CurrentInfo data={weatherData} />
          </Col>
          <Col>
            {/*Receive info from Forecast component*/}
            {/*Send props for weatherData to Forecast*/}
            <Forecast city={weatherData.city} />
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
    search();
    return "Loading...";
  }
}
