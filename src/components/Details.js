import React from "react";
import "./Details.css";
import resume from '../images/varun-resume.pdf';


function Details() {
  return (
    <div id="MainDetails">
      <h1 className="Bio">
        {" "}
        Hello <span className="wave">👋 </span>{" "}
      </h1>

      <br />

      <div id="LinkButtonsDiv">
        <button
          className="GitHubButton"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/varun-balan/", "_blank");
          }}
        >
          GitHub
        </button>

        <button
          className="LinkedInButton"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/varunbalan/", "_blank");
          }}
        >
          LinkedIn
        </button>

        <a className="ResumeAnchor" href={resume} download="varun-resume.pdf">Resume</a>
      </div>
    </div>
  );
}

export default Details;
