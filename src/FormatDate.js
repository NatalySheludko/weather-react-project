import React from "react";

export default function FormatDate(props) {
  /*console.log(props.time);*/
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.time.getDay()];
  let hours = props.time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
