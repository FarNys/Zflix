import React, { useState, useEffect } from "react";
import "../Styles/Home.scss";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { isLogin } from "../features/firebaseSlice";
import { auth, provider } from "../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SingleCardM from "../Components/SingleCardM";
const Home = () => {
  useEffect(() => {
    // localStorage.setItem("currentLoc", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
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
  const [year, setyear] = useState(false);

  return (
    <div className="home_box">
      <div className="home_container">
        <img src="/MovieImg.jpg" alt="" />
        <div className="home_mid_items">
          <button className="home_btn" onClick={loginHandler}>
            Login to Access
          </button>
          {/* <h1>Join us to find the newest movies</h1> */}
        </div>
      </div>
      <div className="home_seprator">
        <h1>Services</h1>
      </div>
      <div className="home_bottom">
        <Fade bottom>
          <div className="home_bot_items">
            <div className="home_item_one">
              <img src="/undraw_movie_night_fldd.png" alt="movie_night" />
            </div>
            <div className="home_item_two">
              <h2>Watch at anytime!</h2>
              <div className="home_text_container">
                Here at IGN, we're always looking for new ways to bring together
                our community to embrace the topics and mediums we're most
                passionate about.
              </div>
            </div>
          </div>
        </Fade>
        <Bounce Left>
          <div className="home__items_seprator"></div>
        </Bounce>
        <Fade bottom>
          <div className="home_bot_items">
            <div className="home_item_one">
              <img src="/undraw_home_cinema_l7yl.png" alt="home_cinema" />
            </div>
            <div className="home_item_two">
              <h2>Bring Cinema To Home!</h2>
              <div className="home_text_container">
                Here at IGN, we're always looking for new ways to bring together
                our community to embrace the topics and mediums we're most
                passionate about. WFH Theater is a weekly livestream that brings
                together some of your favorite IGN personalities and special
                celebrity guests to have a digital movie night together with
                you!
              </div>
            </div>
          </div>
        </Fade>
        <Bounce Left>
          <div className="home__items_seprator"></div>
        </Bounce>
        <Fade bottom>
          <div className="home_bot_items">
            <div className="home_item_one">
              <img src="/undraw_Gift_card_re_5dyy.png" alt="gift_card" />
            </div>
            <div className="home_item_two">
              <h2>Gifts</h2>
              <div className="home_text_container">
                Here at IGN, we're always looking for new ways to bring together
                our community to embrace the topics and mediums we're most
                passionate about. WFH Theater is a weekly livestream that brings
                together some of your favorite IGN personalities and special
                celebrity guests to have a digital movie night together with
                you!
              </div>
            </div>
          </div>
        </Fade>
        <Bounce Left>
          <div className="home__items_seprator"></div>
        </Bounce>
        <Fade bottom>
          <div className="home_bot_items">
            <div className="home_item_one">
              <img src="/undraw_Contract_re_ves9.png" alt="contract" />
            </div>
            <div className="home_item_two">
              <h2>Terms & Conditions</h2>
              <div className="home_text_container">
                Here at IGN, we're always looking for new ways to bring together
                our community to embrace the topics and mediums we're most
                passionate about. WFH Theater is a weekly livestream that brings
                together some of your favorite IGN personalities and special
                celebrity guests to have a digital movie night together with
                you!
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="price_card_container">
        <div className="topmovies_mid_items">
          <h1>Choose your plan</h1>
        </div>
        <div className="select_plan_container">
          <div
            className={year ? "month_selector" : "month_selector active"}
            onClick={() => setyear(false)}
          >
            <h2>Monthly</h2>
          </div>
          <div
            className={!year ? "year_selector" : "year_selector active"}
            onClick={() => setyear(true)}
          >
            <h2>Yearly</h2>
          </div>
        </div>
        <Fade bottom>
          <div className="cards_container">
            <SingleCardM
              type={"Simple"}
              price={10}
              series={false}
              download={false}
              number={"one"}
              year={year}
              quality={720 + "p"}
              users={1}
            />
            <SingleCardM
              type={"Pro"}
              price={12}
              series={true}
              download={false}
              number={"two"}
              year={year}
              quality={1080 + "p"}
              users={2}
            />
            <SingleCardM
              type={"Premium"}
              price={15}
              series={true}
              download={true}
              number={"three"}
              year={year}
              quality={4 + "k"}
              users={2}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
