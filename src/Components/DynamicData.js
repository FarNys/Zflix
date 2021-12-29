import React, { useState, useCallback } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SubjectIcon from "@mui/icons-material/Subject";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import MovieIcon from "@mui/icons-material/Movie";
import "../Styles/DynamicPage.scss";
import { useSelector } from "react-redux";
import { selectAllData } from "../features/dynamic";

const DynamicData = () => {
  const [happy, sethappy] = useState(false);
  const [sad, setsad] = useState(false);
  const getAllData = useSelector(selectAllData);
  // console.log(getAllData);
  const sadHandler = useCallback(() => {
    sethappy(false);
    setsad(!sad);
  }, [sad]);
  const happyHandler = useCallback(() => {
    setsad(false);
    sethappy(!happy);
  }, [happy]);

  return (
    <div className="dynamic_datas">
      <div className="dynamic_line_one">
        <button className="dynamic_btn dynamic_play_btn">
          <PlayArrowIcon className="dynamic_icon_top" /> Play
        </button>
        <button className={happy ? "dynamic_btn_happy" : "dynamic_btn"}>
          <SentimentVerySatisfiedIcon
            onClick={happyHandler}
            className="dynamic_icon_top"
          />
        </button>
        <button className={sad ? "dynamic_btn_sad" : "dynamic_btn"}>
          <SentimentVeryDissatisfiedIcon
            onClick={sadHandler}
            className="dynamic_icon_top"
          />
        </button>
        <div className="dynamic_time_line">
          <AccessTimeIcon className="dynamic_icon_top" />{" "}
          {getAllData.runtimeStr}
        </div>
      </div>
      <div className="dynamic_line_next dynamic_line_next_two">
        <SubjectIcon className="dynamic_time_line_next" />{" "}
        <p>{getAllData.title}</p>
      </div>
      <div className="dynamic_line_next">
        <StarIcon className="dynamic_time_line_next" />{" "}
        <p>{getAllData.stars}</p>
      </div>
      <div className="dynamic_line_next">
        <MovieIcon className="dynamic_time_line_next" />
        {getAllData.directors !== "" ? (
          <p>{getAllData.directors}</p>
        ) : (
          <p>{getAllData.tvSeriesInfo.creators}</p>
        )}
      </div>
      {getAllData.writers !== "" && (
        <div className="dynamic_line_next">
          <EditIcon className="dynamic_time_line_next" />{" "}
          <p>{getAllData.writers}</p>
        </div>
      )}
    </div>
  );
};

export default DynamicData;
