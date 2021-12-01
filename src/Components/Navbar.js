import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";
import { auth, provider } from "../Api/Api";
import Loader from "react-js-loader";

import {
  isLogin,
  isSignout,
  selectuserName,
  selectuserImage,
  selectuserLogin,
} from "../features/firebaseSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const loginHandler = () => {
    auth.signInWithPopup(provider).then((res) =>
      dispatch(
        isLogin({
          loginTrue: true,
          getUsername: res.user.displayName,
          getUserEmail: res.user.email,
          getUserImage: res.user.photoURL,
        })
      )
    );
  };
  const logoutHandler = () => {
    auth.signOut().then(() => dispatch(isSignout()));
    localStorage.setItem("currentLoc", "/");
  };
  const loginUser = useSelector(selectuserName);
  const loginPhoto = useSelector(selectuserImage);
  const logins = useSelector(selectuserLogin);
  useEffect(() => {
    // setloading(true);
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          isLogin({
            loginTrue: true,
            getUsername: user.displayName,
            getUserEmail: user.email,
            getUserImage: user.photoURL,
          })
        );
      }
      // setloading(false);
    });
  }, [dispatch]);
  // if (loading)
  //   return (
  //     <Loader
  //       type="spinner-circle"
  //       bgColor={"#4e54c8"}
  //       color={"#FFFFFF"}
  //       size={75}
  //     />
  //   );
  return (
    <div
      className={logins ? "navbar_container" : "navbar_container_before_login"}
    >
      {logins ? (
        <>
          <div className="navbar_items">
            <Link to="/">
              <div className="navbar_item_logo">
                {" "}
                <svg height="55" width="55" className="svg_item">
                  <path
                    className="path"
                    d="M0 0 L30 0 L30 5 L7 25 L30 25 L30 30 L0 30 L0 25 L23 5 L0 5 L0 0"
                    fill="transparent"
                    stroke="#1f1c2c"
                    stroke-width="1"
                  />
                  <path
                    className="path path_fill"
                    d="M0 0 L30 0 L30 5 L7 25 L30 25 L30 30 L0 30 L0 25 L23 5 L0 5 L0 0"
                    fill="transparent"
                    stroke="#1f1c2c"
                    stroke-width="1"
                  />
                  <circle
                    className="circle_svg"
                    cx="25"
                    cy="25"
                    r="24"
                    fill="transparent"
                    stroke="#4e54c8"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </Link>
            <Link to="/top250movies">
              <div className="navbar_item navbar_item_color_top_movies">
                <StarIcon className="navbar_item_icon " />
                <h4>Top Movies</h4>
              </div>
            </Link>
            <Link to="/top250series">
              <div className="navbar_item navbar_item_color_top_series">
                <StarIcon className="navbar_item_icon " />
                <h4>Top Series</h4>
              </div>
            </Link>
            {/* <div className="navbar_item navbar_item_color_popular_movies">
          <StarIcon className="navbar_item_icon " />
          <h4>Popular Movies</h4>
        </div>
        <div className="navbar_item navbar_item_color_popular_series">
          <StarIcon className="navbar_item_icon " />
          <h4>Poplaur Series</h4>
        </div> */}
            <Link to="/theatre">
              <div className="navbar_item navbar_item_color_theatre">
                <StarIcon className="navbar_item_icon " />
                <h4>Theatre</h4>
              </div>
            </Link>
            <Link to="/search">
              <div className="navbar_item navbar_item_color_popular_series">
                <SearchIcon className="navbar_item_icon " />
                <h4>Search</h4>
              </div>
            </Link>
          </div>
          <div className="navbar_account_logout">
            <img
              src={loginPhoto}
              className="account_icon_login"
              alt={loginUser}
              width="40px"
              height="40px"
            />
            <div className="login_info_container">
              <div className="login_name_container">{loginUser}</div>
              <div className="logout_container" onClick={logoutHandler}>
                Sign Out
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="navbar_account">
          <button className="account_icon_login" onClick={loginHandler}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
