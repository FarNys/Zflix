import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../Styles/TopSeries.scss";
const SingleTopSerie = ({ el }) => {
  return (
    <Link to={`/movie/${el.id}`}>
      <Fade bottom>
        <div className="single_top_movies_container">
          <div className="single_top_movies_img">
            <LazyLoadImage
              src={el.image}
              alt={el.title}
              // width="100%"
              placeholderSrc="/placeholder.jpg"
            />
          </div>
          <div className="single_top_movie_mid">
            <div className="single_top_movie_mid_one">
              <h4>{el.title}</h4>
              <h4>{el.year}</h4>
            </div>
            <div className="single_top_movie_mid_two">
              <h4># of Votes: {el.imDbRatingCount}</h4>
            </div>
            <div className="single_top_movie_mid_three">
              <h4>Rank: {el.rank}</h4>
              {/* <h4>Rate: {el.imDbRating}</h4> */}
              <ProgressBar
                className="progressbar_top_movies"
                height="10px"
                completed={+el.imDbRating * 10}
                baseBgColor="#d5d8d8"
                labelSize="12px"
                labelColor="#1f1c2c"
                bgColor="#1fa2ff"
              />
            </div>
          </div>
        </div>
      </Fade>
    </Link>
  );
};

export default SingleTopSerie;
