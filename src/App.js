import React from "react";
import "./App.css";
import "./Footer.css";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container defaultCity="Vancouver" />
      <p className="footer">
        <a href="https://github.com/candicetate/finalreactweatherapp">
          Open Source
        </a>{" "}
        code by{" "}
        <a href="https://www.linkedin.com/in/candice-tate-8a735246/">
          Candice Tate
        </a>
      </p>
    </div>
  );
}

export default App;
