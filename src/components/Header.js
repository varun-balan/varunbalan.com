import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav id="Navbar">
      <Link className="nav-brand" to="/">
        Varun Balan
      </Link>
      <div className="nav-links">
        {/* `end` makes Home active only on the exact "/" path */}
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
