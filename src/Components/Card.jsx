import React from "react";
import Heart from "../Assets/heart.png";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-content">
      <button className="close-card" onClick={props.removeCard}>
        X
      </button>
      <img
        className="animal-img"
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt="an animal"
      ></img>
      <div className="card-detail">
        <h2 className="animal-name">{props.name}</h2>
        <footer>
          <button className="add-like" onClick={props.addLikes}>
            +
          </button>
          <div className="likes">
            <img
              className={`heart ${props.dislikes ? "dislikes" : ""}`}
              src={Heart}
              alt="Heart icon"
            />
            <p className="likes-counter">{props.likes}</p>
          </div>
          <button className="remove-like" onClick={props.removeLikes}>
            &mdash;
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Card;
