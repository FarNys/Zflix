import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchPage from "./Pages/SearchPage";
import Home from "./Pages/Home";
import "./Styles/App.scss";
import TopMovies from "./Pages/TopMovies";
import TopSeries from "./Pages/TopSeries";
import DynamicPage from "./Pages/DynamicPage";
import Theatre from "./Pages/Theatre";
import ErrorPage from "./Pages/ErrorPage";
import { selectuserLogin } from "./features/firebaseSlice";
import { ScrollToTop } from "./Components/ScrollToTop";
import SliderMenu from "./Components/SliderMenu";
export const apiKey = "k_i3cz6kcz";

function App() {
  const isLogin = useSelector(selectuserLogin);
  const history = useHistory();
  useEffect(() => {
    if (isLogin) {
      let x;

      x = localStorage.getItem("currentLoc");
      history.push(x);
      console.log(x, 67);
    }
  }, [history, isLogin]);

  return (
    <div className="app_container">
      {/* <Router> */}
      {/* <ScrollToTop /> */}
      <Navbar />
      <SliderMenu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {isLogin ? (
          <>
            <Route path="/top250movies">
              <TopMovies />
            </Route>
            <Route path="/top250series">
              <TopSeries />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/theatre">
              <Theatre />
            </Route>
            <Route path="/movie/:id">
              <DynamicPage />
            </Route>
          </>
        ) : (
          <Redirect to="/" />
        )}
        <Route path="*" exact>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
