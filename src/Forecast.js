import React, { useState } from "react";
import "./Forecast.css";
import ForecastBox from "./ForecastBox";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast col-md">
        <p className="fiveday">Hourly Forecast</p>
        <ForecastBox data={forecast.list[0]} />
        <ForecastBox data={forecast.list[1]} />
        <ForecastBox data={forecast.list[2]} />
        <ForecastBox data={forecast.list[3]} />
        <ForecastBox data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "82748eb647aa94c9acf7aa6a08000727";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showForecast);

    return null;
  }
}
