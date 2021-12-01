import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMoviesID } from "../features/movieSlice";
import "../Styles/TabsStyle.scss";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router";

// import Fade from "react-reveal/Fade";

const DynamicActors = () => {
  const { id } = useParams();

  const getAllActors = useSelector(selectMoviesID);
  const [actorsData, setactorsData] = useState([]);
  const [counter, setcounter] = useState(8);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setactorsData(getAllActors.slice(0, counter));
    console.log(actorsData);
    setloading(false);
  }, [getAllActors, loading, counter]);
  useEffect(() => {
    setcounter(8);
  }, [id]);
  const addMoreImage = () => {
    setcounter(counter + 8);
  };
  const deleteMoreImage = () => {
    setcounter(8);
  };
  return (
    <div className="tab_inner_container">
      <div className="tab_title">
        <h1>Casts</h1>
      </div>
      <div className="cast_info_container">
        {actorsData.length > 0 &&
          actorsData.map((el) => (
            <Fade bottom key={el.id}>
              <div className="single_cast_card">
                <LazyLoadImage
                  src={el.image}
                  alt={el.name}
                  width="100%"
                  height="80%"
                  placeholderSrc="/placeholder.jpg"
                />
                <div className="cast_info_bot">
                  <h4>{el.name}</h4>
                  <p>{el.asCharacter}</p>
                </div>
              </div>
            </Fade>
          ))}
      </div>
      <div className="more_actors_image">
        <button className="btn_add_more_actors" onClick={addMoreImage}>
          More
        </button>
        {counter > 8 && (
          <button className="btn_add_more_actors" onClick={deleteMoreImage}>
            Default
          </button>
        )}
      </div>
    </div>
  );
};

export default DynamicActors;
