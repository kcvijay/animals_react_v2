import React from "react";
import "./Animals.css";

const Animals = (props) => {
  return (
    <div className="animals-wrapper">
      <div className="header">
        <h2 className="section-header">Animals</h2>
        <form>
          <input
            type="text"
            name="searchAnimal"
            id="searchAnimal"
            placeholder="Search animals.."
            onChange={props.searchHandler}
          />
        </form>
      </div>

      <div className="animals-cards">{props.animalList}</div>
    </div>
  );
};

export default Animals;
