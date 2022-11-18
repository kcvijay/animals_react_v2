import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="section-home">
      <div className="cards">
        <div className="animal-card">
          <Link to="/animals">Animals</Link>
        </div>
        <div className="bird-card">
          <Link to="/birds">Birds</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
