import React, { useEffect, useState } from "react";
import { BsFillAwardFill, BsCashStack } from "react-icons/bs";
import { AiFillDollarCircle, AiFillEuroCircle } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectAwards, selectBudget } from "../features/dynamic";

const DynamicAwards = () => {
  const getAwards = useSelector(selectAwards);
  const getBudget = useSelector(selectBudget);
  // console.log(getAwards, getBudget);
  return (
    <div className="tab_inner_container">
      {" "}
      <div className="tab_title">
        <h1>Awards & BoxOffice</h1>
      </div>
      <div className="award_container_box">
        <div className="awards_container awards_container_first">
          <div className="awards_single">
            <BsFillAwardFill className="tab_icons" />
            <h4>Awards :</h4>
          </div>
          <div className="awards_data">{getAwards}</div>
        </div>
        {getBudget.budget !== "" && (
          <>
            <div className="awards_container">
              <div className="awards_single">
                <BsCashStack className="tab_icons" />
                <h4>Budget :</h4>
              </div>
              <div className="awards_data">{getBudget.budget}</div>
            </div>
            <div className="awards_container">
              <div className="awards_single">
                <BiShow className="tab_icons" />
                <h4>opening :</h4>
              </div>
              <div className="awards_data">{getBudget.openingWeekendUSA}</div>
            </div>
            <div className="awards_container">
              <div className="awards_single">
                <AiFillDollarCircle className="tab_icons" />
                <h4>USA BoxOffice</h4>
              </div>
              <div className="awards_data">{getBudget.grossUSA}</div>
            </div>
            <div className="awards_container">
              <div className="awards_single">
                <AiFillEuroCircle className="tab_icons" />
                <h4>Global BoxOffice</h4>
              </div>
              <div className="awards_data">
                {getBudget.cumulativeWorldwideGross}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicAwards;
