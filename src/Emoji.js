import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Emoji(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="black"
      size={80}
      animate={true}
    />
  );
}
