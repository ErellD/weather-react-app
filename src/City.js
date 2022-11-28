import React from "react";

import "./City.css";

export default function City() {
  let locationData = {
    city: "Sydney",
    date: "Tuesday 8th November 2022",
    time: "14:33",
  };
  return (
    <div className="City">
      <div className="city-name">{locationData.city}</div>
      <div className="date">
        {locationData.date} {"  "} {locationData.time}
      </div>
    </div>
  );
}
