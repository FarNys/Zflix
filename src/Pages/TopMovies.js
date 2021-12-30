import React, { useState, useEffect } from "react";
import SingleTopMovie from "../Components/SingleTopMovie";
import {
  getAllTopMovies,
  selectMoviesID,
  selectTopMovies,
} from "../features/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/TopMovies.scss";
import { apiKey } from "../App";
import Loader from "react-js-loader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { proxy } from "../App";
const TopMovies = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [numbers, setnumbers] = useState(18);
  const [getData, setgetData] = useState([]);
  const [cleanUp, setcleanUp] = useState(false);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    localStorage.setItem("currentLoc", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
  // GET 250 TOP MOVIES
  useEffect(() => {
    setloading(true);
    setcleanUp(true);
    const getAllMovies = async () => {
      try {
        const res = await fetch(
          `https://imdb-api.com/en/API/Top250Movies/${apiKey}`
        );

        const data = await res.json();

        dispatch(
          getAllTopMovies({
            allData: data.items,
          })
        );
        setloading(false);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMovies();
    setcleanUp(false);
  }, [dispatch]);
  const getAllData = useSelector(selectTopMovies);
  const numbersHnadler = () => {
    if (numbers < 250) {
      if (numbers + 18 > 250) {
        setnumbers(250);
      } else {
        setnumbers(numbers + 18);
      }
    }
  };

  useEffect(() => {
    setloading(true);
    if (getAllData.length > 0) {
      const dataLength = getAllData.length;
      if (numbers < dataLength) {
        setgetData(getAllData.slice(0, numbers));
      }
      // console.log(getAllData, numbers);
    }
    setloading(false);
    // console.log(getData);
  }, [loading, numbers, cleanUp, getAllData]);

  if (loading) {
    <Loader
      type="spinner-circle"
      bgColor={"#4e54c8"}
      color={"#FFFFFF"}
      size={75}
    />;
  }
  return (
    <div className="topmovies_container">
      <div className="topmovies_container">
        <div className="movies_img_container">
          <img src="/godfather.jpg" alt="godfather_poster" />
        </div>
        <div className="topmovies_mid_items">
          <h1>Top 250 Movies On IMDB</h1>
        </div>
        <div className="results_container_topmovies">
          <div className="result_topmovies">
            <h1>Results</h1>
          </div>
          <div className="top_movies_single_container">
            {getData.length > 0 ? (
              getData.map((el) => <SingleTopMovie el={el} key={el.id} />)
            ) : (
              <Loader
                type="spinner-circle"
                bgColor={"#4e54c8"}
                color={"#FFFFFF"}
                size={75}
              />
            )}
          </div>
        </div>
        <div className="add_more_movies">
          <button className="addbtn_movies" onClick={numbersHnadler}>
            <AddCircleIcon className="addbtn_movies_icon" />
          </button>
          <div className="movie_numbers">Rank (1 - {numbers})</div>
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
