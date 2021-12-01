import React, { useState, useEffect } from "react";
import { apiKey } from "../App";
import Loader from "react-js-loader";
import "../Styles/Theatre.scss";
import SingleTheatre from "../Components/SingleTheatre";
import SingleTheatreData from "../Components/SingleTheatreData";
// https://imdb-api.com/en/API/InTheaters/k_12345678
const Theatre = () => {
  const [loading, setloading] = useState(false);
  const [theatreData, settheatreData] = useState([]);
  const [currentData, setcurrentData] = useState();
  useEffect(() => {
    localStorage.setItem("currentLoc", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setloading(true);
    const getTheatre = async () => {
      const res = await fetch(
        `https://imdb-api.com/en/API/InTheaters/${apiKey}`
      );
      const data = await res.json();
      settheatreData(data.items);
      setcurrentData(data.items[0]);
      setloading(false);
    };
    getTheatre();
  }, []);

  return (
    <div className="topmovies_container">
      <div className="topmovies_container">
        <div className="movies_img_container">
          <img src="/theatreImage.jpg" alt="godfather_poster" />
        </div>
        <div className="topmovies_mid_items">
          <h1>Theatre On Scene</h1>
        </div>
        <div className="results_container_topmovies">
          <div className="result_topmovies">
            <h1>Results</h1>
          </div>
        </div>
        {loading ? (
          <Loader
            type="spinner-circle"
            bgColor={"#4e54c8"}
            color={"#FFFFFF"}
            size={75}
          />
        ) : (
          <>
            <div className="all_theatre_container">
              {theatreData.length > 0 ? (
                theatreData.map((el) => (
                  <SingleTheatre
                    el={el}
                    key={el.id}
                    setcurrentData={setcurrentData}
                  />
                ))
              ) : (
                <p>There is No Item</p>
              )}
            </div>
            {currentData && (
              <div className="theatre_data_container">
                <div className="theatre_box">
                  <SingleTheatreData title={"Title"} text={currentData.title} />
                  <SingleTheatreData title={"Year"} text={currentData.year} />
                  <SingleTheatreData title={"Plot"} text={currentData.plot} />
                  <SingleTheatreData
                    title={"Release State"}
                    text={currentData.releaseState}
                  />
                  <SingleTheatreData
                    title={"Duration"}
                    text={currentData.runtimeStr}
                  />
                  <SingleTheatreData title={"Stars"} text={currentData.stars} />
                  <SingleTheatreData
                    title={"Director(s)"}
                    text={currentData.directors}
                  />
                  <SingleTheatreData
                    title={"Meta Critic"}
                    text={currentData.metacriticRating}
                  />
                  <SingleTheatreData
                    title={"Genre(s)"}
                    text={currentData.genres}
                  />
                  <SingleTheatreData
                    title={"Content Rating"}
                    text={currentData.contentRating}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Theatre;
