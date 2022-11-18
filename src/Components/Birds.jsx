import React from "react";
import "./Birds.css";

const Birds = (props) => {
  return (
    <div className="birds-wrapper">
      <div className="header">
        <h2 className="section-header">Birds</h2>
        <form>
          <input
            type="text"
            name="searchBird"
            id="searchBird"
            placeholder="Search birds.."
            onChange={props.searchHandler}
          />
        </form>
      </div>
      <div className="birds-cards">{props.birdList}</div>
    </div>
  );
};

export default Birds;
