import React from "react";

export default function FormattedTime(props) {
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
