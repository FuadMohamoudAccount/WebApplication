import React, {useState} from "react";
import moment from "moment"; //This is being imported for each forecast, CHANGE!

function Forecast(props) {
  const getDate = () => {
    var dayOfWeek = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    var number = moment(props.date).day() + 1;
    if(number > 6) {
      number = 0;
    }
    var getDay = dayOfWeek[number];
    var fullDate = getDay + " " + moment(props.date).format("Do");
    return fullDate;
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #eee",
          margin: "5px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "200px",
          borderRadius: "5px",
        }}
      >
        <div>{getDate()}</div>
          <div>
            <img src={props.day.condition.icon} alt="Weather Icon" />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <div>{props.day.condition.text}</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ fontWeight: "bold", marginRight: "5px" }}>High</div>
          {props.isFarenheit ? (
            <div>{props.day.maxtemp_f}°F</div>
          ) : (
            <div>{props.day.maxtemp_c}°C</div>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ fontWeight: "bold", marginRight: "5px" }}>Low</div>
          {props.isFarenheit ? (
            <div>{props.day.mintemp_f}°F</div>
          ) : (
            <div>{props.day.mintemp_c}°C</div>
          )}
        </div>
        <div style={{display: 'flex'}}>
          <strong style={{marginRight: '5px'}}>Humidity</strong> 
          {props.isFarenheit ? (
           <div>{props.day.avghumidity}°F</div>
          ): (<div>{props.celsiusHumidity}°C</div>)}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
