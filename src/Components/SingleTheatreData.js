import React from "react";
import "../Styles/Theatre.scss";
const SingleTheatreData = ({ text, title }) => {
  return (
    <div className="theatre_line">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default SingleTheatreData;
