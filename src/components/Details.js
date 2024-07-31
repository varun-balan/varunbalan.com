import React from "react";
import "./Details.css";
import selfImage from "../images/selfPhoto1.jpg";

function Details() {
  return (
    <div id="MainDetails">
      <div id="LeftHalfLanding">
        <h1 className="Bio">
          Hello <span className="wave">👋 </span>
        </h1>
        <img src={selfImage} alt="Varun-Self" id="PersonalPhoto"/>
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
        <a
          className="ResumeAnchor"
          href="https://varun-balan-resume-personal-website.s3.amazonaws.com/Varun-Balan-Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Details;
