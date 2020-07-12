import React, { useState } from "react";

export default function TempConvert(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <p className="bigtext">
        {Math.round(props.celcius)}
        <span className="degrees">
          <sup>
            °C |{" "}
            <a href="/" onClick={convertToF}>
              °F
            </a>
          </sup>
        </span>
      </p>
    );
  } else {
    return (
      <p className="bigtext">
        {Math.round(fahrenheit())}
        <span className="degrees">
          <sup>
            <a href="/" onClick={convertToC}>
              °C
            </a>{" "}
            | °F
          </sup>
        </span>
      </p>
    );
  }
}
