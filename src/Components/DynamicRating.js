import React, { useState, useEffect } from "react";
import { selectAllRating } from "../features/dynamic";
import "../Styles/TabsStyle.scss";
import { useSelector } from "react-redux";
const DynamicRating = () => {
  const [loading, setloading] = useState(false);
  const getRatings = useSelector(selectAllRating);
  // console.log(getRatings);
  return (
    <div className="tab_inner_container">
      <div className="tab_title">
        <h1>Scores</h1>
      </div>
      <div className="score_desc">
        As the reviews of a given film accumulate, the Rotten Tomatoes score
        measures the percentage that are more positive than negative, and
        assigns an overall fresh or rotten rating to the movie. Scores of over
        60 percent are considered fresh, and scores of 59 percent and under are
        rotten
      </div>
      {getRatings !== null && (
        <div className="all_score_container">
          {getRatings.imDb !== "" && (
            <div className="score_box">
              <h4>IMDB</h4>
              <p>{getRatings.imDb}</p>
            </div>
          )}
          {getRatings.metacritic !== "" && (
            <div className="score_box">
              <h4>METACRITIC</h4>
              <p>{getRatings.metacritic}</p>
            </div>
          )}
          {getRatings.rottenTomatoes !== "" && (
            <div className="score_box">
              <h4>ROTTEN TOMATOES</h4>
              <p>{getRatings.rottenTomatoes}</p>
            </div>
          )}
          {getRatings.tV_com !== "" && (
            <div className="score_box">
              <h4>TV_COM</h4>
              <p>{getRatings.tV_com}</p>
            </div>
          )}
          {getRatings.theMovieDb !== "" && (
            <div className="score_box">
              <h4>THE MOVIE DB</h4>
              <p>{getRatings.theMovieDb}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicRating;
