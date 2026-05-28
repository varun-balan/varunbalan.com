import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div id="Header">
      <Link id="MidNameDisplay" to="/">Varun Balan</Link>
      {/* <div className='Header-Right'>
            <button>Resume</button>
            <button>Projects</button>
            <button>About Me</button>
        </div> */}
    </div>
  );
}

export default Header;
