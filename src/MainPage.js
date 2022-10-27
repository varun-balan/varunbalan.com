import "./MainPage.css";
import Header from "./components/Header";
import Details from "./components/Details";
import React from "react";

function MainPage() {
  return (
    <div className="MainPage">
      {/* Define routes */}

      <React.Fragment>
        <br />
        <h1 style={{ textAlign: "center" }}>
          Hello! Welcome to my website. I'm currently developing it :)
        </h1>
        <h2 style={{ textAlign: "center" }}>
          I estimate to have it mostly up by mid December 2022
        </h2>
        <br />
      </React.Fragment>

      <Header />

      <Details />
    </div>
  );
}

export default MainPage;
