import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="erro_container">
      <h1>Somethins is wrong !</h1>
      <img src="/404.png" alt="" />
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default ErrorPage;
