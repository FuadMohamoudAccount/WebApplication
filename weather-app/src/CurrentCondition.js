import React from "react";
import moment from "moment";

function CurrentCondition(props, isFarenheit) {
  const currentDate = () => {
    return moment(props.last_updated).format("h:mm a");
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <div
          style={{
            border: "1px solid #eee",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <h3>
                {props.city}, {props.state} Weather
              </h3>
              <p>as of {currentDate()}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
              <div style={{ alignItems: "flex-start" }}>
                <div>
                  {props.isFarenheit ? (
                    <h1>{props.feelslike_f}°F</h1>
                  ) : (
                    <h1>{props.feelslike_c}°C</h1>
                  )}
                </div>
                <h4>{props.condition.text}</h4>
              </div>
              <div>
                <img
                  src={props.condition.icon}
                  alt="Weather Icon"
                  style={{ width: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentCondition;
