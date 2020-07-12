import React from "react";
import "./CurrentInfo.css";
import DateFormat from "./DateFormat";
import Emoji from "./Emoji";

export default function CurrentInfo(props) {
  console.log(props.data);
  return (
    <div className="col-md currentweather CurrentInfo">
      <p className="maincity">{props.data.city}</p>
      {/* Import Date */}
      <DateFormat date={props.data.date} className="time" />
      <p className="bigtext">
        {Math.round(props.data.temperature)}{" "}
        <span className="degrees">°C / °F</span>
      </p>
      <p className="description">
        {props.data.description} {/* Import Emoji */}
        <Emoji code={props.data.icon} />
      </p>
      <p className="windspeed">Wind Speed: {Math.round(props.data.wind)} km</p>
      <p className="precipitation">Humidity: {props.data.humidity} %</p>
    </div>
  );
}
