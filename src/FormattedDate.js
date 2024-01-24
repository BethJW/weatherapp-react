import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();
  return (
    <div>
      {day}, {date} <br />
      {year}
    </div>
  );
}
