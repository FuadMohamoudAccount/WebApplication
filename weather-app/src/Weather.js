import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import CurrentCondition from "./CurrentCondition";
import Forecast from "./Forecast";

function Weather(props) {
  const current = props.current;
  const location = props.location;
  const forecast = props.forecast;
  const [isFarenheit, setIsFarenheit] = useState(true);

  const toggleTemp = () => {
    setIsFarenheit(!isFarenheit);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "center", marginTop: '15px'}}>
        <Button
          variant="outlined"
          onClick={toggleTemp}
          style={{
            margin: "0px",
            padding: "0px",
            text: "bold",
          }}
        >
          <strong>{isFarenheit ? <p>°F</p>: <p>°C</p> } </strong>
        </Button>
      </div>
      {current && (
        <CurrentCondition
          {...current}
          city={location.name}
          state={location.region}
          isFarenheit={isFarenheit}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
          borderRadius: "8px",
        }}
      >
        {forecast &&
          forecast.map((forecast) => {
            return (
              <Forecast
                key={forecast.date_epoch}
                {...forecast}
                isFarenheit={isFarenheit}
                celsiusHumidity={Math.round((forecast.day.avghumidity - 32) * 5/9)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Weather;
