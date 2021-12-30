import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../Styles/SearchPage.scss";
import { apiKey } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { getAllResults } from "../features/searchSlice";
import SingleSearchItem from "../Components/SingleSearchItem";
import Loader from "react-js-loader";
import { proxy } from "../App";
const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [loading, setloading] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("currentLoc", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
  const searchHandler = () => {
    if (searchText !== "") {
      setloading(true);
      const searchFetch = async () => {
        const res = await fetch(
          `${proxy}/https://imdb-api.com/en/API/SearchTitle/${apiKey}/${searchText}`
        );
        const data = await res.json();
        dispatch(
          getAllResults({
            allSearchData: data.results,
          })
        );
        // console.log(data.results);
        setsearchData(data.results);
        setloading(false);
      };
      searchFetch();
    }
  };
  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      if (searchText !== "") {
        setloading(true);
        const searchFetch = async () => {
          const res = await fetch(
            `${proxy}/https://imdb-api.com/en/API/SearchTitle/${apiKey}/${searchText}`
          );
          const data = await res.json();
          dispatch(
            getAllResults({
              allSearchData: data.results,
            })
          );
          // console.log(data.results);
          setsearchData(data.results);
          setloading(false);
        };
        searchFetch();
      }
    }
  };
  useEffect(() => {
    // localStorage.setItem("currentLoc", window.location.pathname);
    inputRef.current.focus();
  }, []);
  return (
    <div className="search_container">
      <div className="search_top_part" onKeyUp={keyHandler}>
        <input
          onChange={(e) => setsearchText(e.target.value.trim())}
          type="text"
          placeholder="Search Movie Name"
          ref={inputRef}
        />
        <button onClick={searchHandler} className="search_btn">
          <SearchIcon className="search_icon" />
        </button>
      </div>
      <div className="search_result">
        <h1>Results</h1>
      </div>
      <div className="search_result_container">
        {loading ? (
          <Loader
            type="spinner-circle"
            bgColor={"#4e54c8"}
            color={"#FFFFFF"}
            size={75}
          />
        ) : searchData.length === 0 ? (
          <p>No Item</p>
        ) : (
          searchData.map((el) => <SingleSearchItem el={el} key={el.id} />)
        )}
      </div>
    </div>
  );
};

export default SearchPage;
