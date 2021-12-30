import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "../Styles/DynamicPage.scss";
import { apiKey } from "../App";
import { getcurrentActors, selectMoviesID } from "../features/movieSlice";
import {
  catchAllData,
  getAllAwards,
  getAllRating,
  getAllSimilars,
} from "../features/dynamic";
import DynamicData from "../Components/DynamicData";
import Fade from "react-reveal/Fade";
import DynamicMidLine from "../Components/DynamicMidLine";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import DynamicActors from "../Components/DynamicActors";
import DynamicRating from "../Components/DynamicRating";
import DynamicAwards from "../Components/DynamicAwards";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DynamicSimilars from "../Components/DynamicSimilars";

const DynamicPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [cleanUp, setcleanUp] = useState(false);
  const [singleMovie, setsingleMovie] = useState([]);
  const [tabIndext, settabIndext] = useState(2);
  const [similars, setsimilars] = useState([]);
  const [renderComp, setrenderComp] = useState([
    <DynamicActors />,
    <DynamicAwards />,
    <DynamicRating />,
  ]);
  useEffect(() => {
    localStorage.setItem("currentLoc", window.location.pathname);
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    setcleanUp(true);
    const getSingle = async () => {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://imdb-api.com/en/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,`
      );
      const data = await res.json();
      dispatch(
        catchAllData({
          allData: data,
        })
      );
      dispatch(
        getcurrentActors({
          itemData: data.actorList,
        })
      );
      dispatch(
        getAllAwards({
          awardsData: data.awards,
          budgetData: data.boxOffice,
        })
      );
      dispatch(
        getAllRating({
          ratingData: data.ratings,
        })
      );
      dispatch(
        getAllSimilars({
          similarsData: data.similars,
        })
      );
      setsimilars(data.similars);
      // console.log(data.similars);
      setsingleMovie(data);
      setloading(false);
    };
    getSingle();
    setcleanUp(false);
  }, [loading, dispatch, id]);
  // const singleData = useSelector(selectMoviesID);
  // console.log(singleData);

  if (loading) return <h1>Loading . . .</h1>;
  return (
    <div className="dynamic_container">
      <div className="dynamic_top">
        <div className="dynamic_poster">
          <LazyLoadImage
            src={singleMovie.image}
            alt="poster"
            width="100%"
            height="100%"
            placeholderSrc="/placeholder.jpg"
          />
        </div>
        <DynamicData />
      </div>
      <div className="dynamic_mid">
        <h1>More</h1>
        <Fade left>
          <div className="dynamic_mid_info">
            <DynamicMidLine text={"Plot"} desc={singleMovie.plot} />
            {singleMovie.plotLocal !== "" && (
              <DynamicMidLine text={"PlotLocal"} desc={"this is Localplot"} />
            )}
            <DynamicMidLine text={"Genre(s)"} desc={singleMovie.genres} />
            <DynamicMidLine
              text={"Release Date"}
              desc={singleMovie.releaseDate}
            />
            <DynamicMidLine text={"Imdb "} desc={singleMovie.imDbRating} />
            <DynamicMidLine
              text={"#Votes"}
              desc={singleMovie.imDbRatingVotes}
            />
            <DynamicMidLine text={"company(s)"} desc={singleMovie.companies} />
            <DynamicMidLine text={"country(s)"} desc={singleMovie.countries} />
            <DynamicMidLine text={"Language(s)"} desc={singleMovie.languages} />
          </div>
        </Fade>
      </div>
      <div className="dynamic_page_tabs_container">
        <div className="tabs_container_top">
          <div
            className={tabIndext === 0 ? "tabs_text_active" : "tabs_text"}
            onClick={() => settabIndext(0)}
          >
            <div className="tab_handler">Actors</div>
            <ArrowCircleDownIcon className="tab_icon" />
          </div>
          <div
            className={tabIndext === 1 ? "tabs_text_active" : "tabs_text"}
            onClick={() => settabIndext(1)}
          >
            <div className="tab_handler">Awards</div>
            <ArrowCircleDownIcon className="tab_icon" />
          </div>
          <div
            className={tabIndext === 2 ? "tabs_text_active" : "tabs_text"}
            onClick={() => settabIndext(2)}
          >
            <div className="tab_handler">Rating</div>
            <ArrowCircleDownIcon className="tab_icon" />
          </div>
        </div>
        <div className="tabs_render_data">{renderComp[tabIndext]}</div>
      </div>
      <div className="dynamic_similars_container">
        <div className="similars_header">
          <h1>You may also like</h1>
        </div>
        <div className="similar_single_container">
          {similars.length > 0 ? (
            similars.map((el) => <DynamicSimilars el={el} key={el.id} />)
          ) : (
            <p>Nothing to show ... .</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
