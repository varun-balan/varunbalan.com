import "./MainPage.css";
import Header from "./components/Header";
import Details from "./components/Details";
import React from "react";

function MainPage() {
  return (
    <div className="MainPage">
      {/* Define routes */}

      <Header />
      <Details />
    </div>
  );
}

export default MainPage;
