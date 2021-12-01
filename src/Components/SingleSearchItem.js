import React from "react";
import "../Styles/SearchPage.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SingleSearchItem = ({ el }) => {
  return (
    <Link to={`/movie/${el.id}`}>
      <div className="single_search_item">
        <div className="search_image_container">
          <LazyLoadImage
            src={el.image}
            alt={el.title}
            placeholderSrc="/placeholder.jpg"
            width="100%"
          />
        </div>
        <div className="search_title">
          <p>{el.title}</p>
          <span>{el.description}</span>
        </div>
      </div>
    </Link>
  );
};

export default SingleSearchItem;
