import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "../Styles/TabsStyle.scss";
const DynamicSimilars = ({ el }) => {
  return (
    <Link to={`/movie/${el.id}`}>
      <div className="similars_box">
        <LazyLoadImage
          src={el.image}
          alt={el.title}
          placeholderSrc="/placeholder.jpg"
        />
        <div className="similars_data">
          <p>{el.title}</p>
          <p>IMDB : {el.imDbRating}</p>
        </div>
      </div>
    </Link>
  );
};

export default DynamicSimilars;
