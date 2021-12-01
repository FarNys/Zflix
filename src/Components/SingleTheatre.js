import React from "react";
import "../Styles/Theatre.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleTheatre = ({ el, setcurrentData }) => {
  const pushData = () => {
    setcurrentData(el);
  };
  return (
    <div className="single_theatre" onClick={pushData}>
      <div className="theatre_image">
        <LazyLoadImage
          src={el.image}
          alt={el.title}
          width="100%"
          height="100%"
          placeholderSrc="/placeholder.jpg"
        />
      </div>
      <div className="theatre_title">{el.title}</div>
    </div>
  );
};

export default SingleTheatre;
