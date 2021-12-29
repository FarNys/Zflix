import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth, provider } from "../Api/Api";
import {
  isLogin,
  isSignout,
  selectuserImage,
  selectuserLogin,
  selectuserName,
} from "../features/firebaseSlice";
import "../Styles/SliderMenu.scss";
import { useParams } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import CloseIcon from "@mui/icons-material/Close";
import {
  changeToTrue,
  changeToFalse,
  selectCurrentCss,
} from "../features/globalCSS";
const SliderMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [loading, setloading] = useState(false);
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
    dispatch(changeToFalse());
  };
  const loginUser = useSelector(selectuserName);
  const loginPhoto = useSelector(selectuserImage);
  const logins = useSelector(selectuserLogin);
  const cssStyle = useSelector(selectCurrentCss);
  // console.log(loginUser, loginPhoto, logins);
  useEffect(() => {
    dispatch(changeToFalse());
    // console.log(959);
  }, [id, dispatch]);
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
  return (
    <div className="slider_menu_container">
      <div className="slider_menu_top">
        <div
          className="slider_logo_container"
          onClick={() => dispatch(changeToFalse())}
        >
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
        </div>
        <div className="slider_hamburger_container">
          {cssStyle ? (
            <CloseIcon
              className="hamburger_icon"
              onClick={() => dispatch(changeToFalse())}
            />
          ) : (
            <GiHamburgerMenu
              className="hamburger_icon"
              onClick={() => dispatch(changeToTrue())}
            />
          )}
        </div>
      </div>
      <div className={cssStyle ? "slider_menu_bot active" : "slider_menu_bot"}>
        {logins ? (
          <>
            <img src={loginPhoto} alt="profile-Img" />
            <span>{loginUser}</span>
          </>
        ) : (
          <span>Login to access</span>
        )}
        <div
          className={
            logins
              ? "slider_menu_pages_container"
              : "slider_menu_pages_container active"
          }
        >
          <Link to="/top250movies">
            <div
              className="slider_menu_page"
              onClick={() => dispatch(changeToFalse())}
            >
              <h3>Top Movies</h3>
            </div>
          </Link>
          <Link to="/top250series">
            <div
              className="slider_menu_page"
              onClick={() => dispatch(changeToFalse())}
            >
              <h3>Top Series</h3>
            </div>
          </Link>
          <Link to="/theatre">
            <div
              className="slider_menu_page"
              onClick={() => dispatch(changeToFalse())}
            >
              <h3>Theatre</h3>
            </div>
          </Link>
          <Link to="/search">
            <div
              className="slider_menu_page"
              onClick={() => dispatch(changeToFalse())}
            >
              <h3>Search</h3>
            </div>
          </Link>
          {logins ? (
            <button className="slider_menu_singOut" onClick={logoutHandler}>
              Sign Out
            </button>
          ) : (
            <button className="slider_menu_singin" onClick={loginHandler}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderMenu;
