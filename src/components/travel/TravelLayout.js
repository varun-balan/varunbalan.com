import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header";
import "./TravelLayout.css";

// Layout for the /travel section: main navbar + secondary tabbed nav for
// the three sub-sections + <Outlet /> where each subpage renders.
function TravelLayout() {
  return (
    <div className="TravelLayout">
      <Header />
      <nav className="travel-subnav" aria-label="Travel sections">
        <NavLink to="/travel" end className="travel-subnav-link">
          Overview
        </NavLink>
        <NavLink to="/travel/counties" className="travel-subnav-link">
          Counties
        </NavLink>
        <NavLink to="/travel/countries" className="travel-subnav-link">
          Countries
        </NavLink>
        <NavLink to="/travel/parks" className="travel-subnav-link">
          Parks
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default TravelLayout;
