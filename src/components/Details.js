import React from "react";
import "./Details.css";
import resume from "../images/varun-resume.pdf";

function Details() {
  return (
    <div id="MainDetails">
      <h1 className="Bio">
        {" "}
        Hello <span className="wave">👋 </span>{" "}
      </h1>

      <br />

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
        <a className="ResumeAnchor" href={resume} download="varun-resume.pdf">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Details;
