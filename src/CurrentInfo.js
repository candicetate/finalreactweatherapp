import React from "react";
import "./CurrentInfo.css";
import DateFormat from "./DateFormat";
import Emoji from "./Emoji";
import TempConvert from "./TempConvert";

export default function CurrentInfo(props) {
  console.log(props.data);
  return (
    <div className="col-md currentweather CurrentInfo">
      <p className="maincity">{props.data.city}</p>
      {/* Import Date */}
      <DateFormat date={props.data.date} className="time" />
      <p className="bigtext">
        {/* Import Temperature Conversion */}
        <TempConvert celcius={props.data.temperature} />
      </p>
      <p className="description">
        {/* Import Emoji */}
        <Emoji code={props.data.emoji} /> {props.data.description}
      </p>
      <p className="windspeed">Wind Speed: {Math.round(props.data.wind)} km</p>
      <p className="precipitation">Humidity: {props.data.humidity} %</p>
    </div>
  );
}
