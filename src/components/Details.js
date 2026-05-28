import React from "react";
import "./Details.css";
import selfImage from "../images/selfPhoto3.jpg";

function Details() {
  return (
    <div id="MainDetails">
      <h1 className="visually-hidden">Varun Balan — Software Engineer</h1>

      <div id="LeftHalfLanding">
        <img src={selfImage} alt="Varun Balan" id="PersonalPhoto"/>
      </div>

      <div id="LinkButtonsDiv">
        <a
          className="GitHubAnchor"
          href="https://github.com/varun-balan/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="LinkedInAnchor"
          href="https://www.linkedin.com/in/varunbalan/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Details;
