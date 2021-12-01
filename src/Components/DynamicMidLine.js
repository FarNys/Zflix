import React from "react";
import "../Styles/DynamicPage.scss";
const DynamicMidLine = ({ text, desc }) => {
  return (
    <div className="dynamic_mid_line">
      <h4>{text}: </h4> <p> {desc}</p>
    </div>
  );
};

export default DynamicMidLine;
