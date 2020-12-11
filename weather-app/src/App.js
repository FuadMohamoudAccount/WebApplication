import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import Weather from "./Weather";

function App() {
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState(false);
  const [current, setCurrent] = useState("");
  const [forecast, setForecast] = useState("");
  const [location, setLocation] = useState("");
  const api =
    "https://api.weatherapi.com/v1/forecast.json?key=62d104f23014446fb7544020200112";

  const onKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      fetch(`${api}&q=${query}&days=3`)
        .then((res) => res.json())
        .then((result) => {
          setAlert(false);
          setCurrent(result.current);
          setForecast(result.forecast.forecastday);
          setLocation(result.location);
          setQuery("");
        })
        .catch((error) => {
          setAlert(true);
          setCurrent("");
          setForecast("");
          setLocation("");
          console.log(error);
        });
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <div>
          <div style={{fontSize: '34px', fontWeight: '500px', fontStyle: "Alegreya', serif"}}>Weather App</div>
          <div>
            <TextField
              onKeyDown={onKeyDown}
              value={query}
              onChange={onChange}
              error={alert}
            />
            {alert && (
              <div style={{ fontSize: "10px", color: "red" }}>
                Re-Enter Location
              </div>
            )}
          </div>
        </div>
        {location && forecast && current && (
          <Weather location={location} forecast={forecast} current={current} />
        )}
      </div>
    </>
  );
}

export default App;
