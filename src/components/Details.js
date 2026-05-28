import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import selfImage from "../images/selfPhoto3.jpg";

function Details() {
  return (
    <div id="MainDetails">
      <div id="LeftHalfLanding">
        <img src={selfImage} alt="Varun Balan" id="PersonalPhoto"/>
      </div>

      {/* <div class="verticalLine"></div> */}

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
        <Link className="ResumeAnchor" to="/resume">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Details;
