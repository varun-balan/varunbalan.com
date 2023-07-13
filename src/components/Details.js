import React from "react";
import "./Details.css";

function Details() {
  return (
    <div id="MainDetails">
      <div id="LeftHalfLanding">
        <h1 className="Bio">
          Hello <span className="wave">👋 </span>
        </h1>
      </div>

      <div class="verticalLine"></div>

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
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Details;
