import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="section-header">About this website</h2>
      <div className="about-detail">
        <p className="bold-txt">
          This website is a classroom project for the Fullstack Web Developer
          Program (React & Node) at Business College, Helsinki.
        </p>
        <br />
        <p>
          The website has two sections, birds and animals. You can navigate
          either animals or birds from the Home section or the navigation links
          above. Animal images might differ from the actuality.
        </p>
        <p>
          The website is created in React. All the images are picked from{" "}
          <a href="http://www.unsplash.com" target="_blank noreferer">
            Unsplash
          </a>
          .
        </p>
        <p>
          Source code is viewable at{" "}
          <a
            href="https://github.com/kcvijay/animals_react_v2"
            target="_blank noreferer"
          >
            GitHub
          </a>
          .
        </p>
        <p className="bold-txt">Happy browsing!</p>
      </div>
    </div>
  );
};

export default About;
