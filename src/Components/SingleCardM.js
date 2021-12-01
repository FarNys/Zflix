import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "../Styles/SingleCardM.scss";
import { MdHighQuality } from "react-icons/md";
import { FaUser, FaUserFriends } from "react-icons/fa";

const SingleCardM = ({
  price,
  type,
  series,
  download,
  number,
  year,
  quality,
  users,
}) => {
  return (
    <>
      <div className={"planBox" + number}>
        <div className="card_plan_name ">
          <h1>{type}</h1>
        </div>
        <div className="card_month_container">
          {year ? <h2>12 Months</h2> : <h2>1 Month</h2>}
        </div>
        <div className="card_properties_container">
          <div className="card_property_box">
            <CheckCircleIcon className="check_icon" />{" "}
            <h4>Access All Movies</h4>
          </div>
          <div className="card_property_box">
            {series ? (
              <CheckCircleIcon className="check_icon" />
            ) : (
              <CancelIcon />
            )}
            <h4>Access All Series</h4>
          </div>
          <div className="card_property_box">
            {download ? (
              <CheckCircleIcon className="check_icon" />
            ) : (
              <CancelIcon />
            )}
            <h4>Download Content</h4>
          </div>
          <div className="card_property_box">
            <MdHighQuality className="check_icon" style={{ fontSize: "25" }} />
            <h4>Max Quality : {quality}</h4>
          </div>
          <div className="card_property_box">
            {users === 1 ? (
              <FaUser className="check_icon" style={{ fontSize: "25" }} />
            ) : (
              <FaUserFriends
                className="check_icon"
                style={{ fontSize: "25" }}
              />
            )}
            <h4>Max users : {users}</h4>
          </div>
        </div>
        <div className="card_price_list">
          <h3>{year ? price * 12 * 0.8 : price} $</h3>
          {year && <h4>${price * 12}</h4>}
          {year && <p>20% Off</p>}
        </div>
      </div>
    </>
  );
};

export default SingleCardM;
