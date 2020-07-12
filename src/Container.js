import React from "react";
import "./Container.css";
import "./CurrentInfo.css";
import "./Forecast.css";
import "./SearchBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Weather() {
  return (
    <Container fluid="md" className="Container">
      <Row md={2}>
        <Col>
          <div className="col-md currentweather">
            <span className="maincity">Edmonton</span>
            <br />
            <span className="time">
              Saturday July 11, 2020
              <br />
              at 12:00
            </span>
            <br />
            <span className="bigtext">10</span>
            <p className="description">Descrip. Emoji</p>
            <p className="windspeed">Wind Speed: wind km</p>
            <p className="precipitation">Humidity: 0 %</p>
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
}
