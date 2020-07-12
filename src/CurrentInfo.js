import React from "react";
import "./CurrentInfo.css";
import DateFormat from "./DateFormat";

export default function CurrentInfo(props) {
  console.log(props.data);
  return (
    <div className="col-md currentweather CurrentInfo">
      <p className="maincity">{props.data.city}</p>
      <DateFormat date={props.data.date} className="time" />
      <p className="bigtext">
        {Math.round(props.data.temperature)}{" "}
        <span className="degrees">°C / °F</span>
      </p>
      <p className="description">
        {props.data.description} <img src={props.data.emoji} alt="Emoji" />
      </p>
      <p className="windspeed">Wind Speed: {Math.round(props.data.wind)} km</p>
      <p className="precipitation">Humidity: {props.data.humidity} %</p>
    </div>
  );
}
