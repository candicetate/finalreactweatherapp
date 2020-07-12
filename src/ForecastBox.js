import React from "react";
import Emoji from "./Emoji";

export default function ForecastBox(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function round() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}`;
  }

  return (
    <p className="futuretemp">
      {round()}°C <Emoji code={props.data.weather[0].icon} /> at {hours()}
    </p>
  );
}
