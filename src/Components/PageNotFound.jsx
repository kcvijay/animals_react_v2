import React from "react";
import { Link } from "react-router-dom";
import BrokenLink from "../Assets/broken-link.png";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <section className="section-component section-pagenotfound">
      <img
        className="img-broken-link"
        src={BrokenLink}
        alt="Link not found"
      ></img>
      <h2 className="error-code">Error 404</h2>
      <p className="error-msg">Page Not Found !</p>
      <Link to="/">&larr;&nbsp;Back to home</Link>
    </section>
  );
};

export default PageNotFound;
