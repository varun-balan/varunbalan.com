import React from "react";
import { Link } from "react-router-dom";
import counties from "../../data/travel/counties";
import countries from "../../data/travel/countries";
import parks from "../../data/travel/parks";
import "./TravelLanding.css";

// Compute a headline stat for each subsection so the cards feel alive rather
// than static links.
const countyCount = counties.visited.length;
const stateCount = new Set(
  counties.visited
    .map((c) => String(c.fips).slice(0, 2))
    .filter((s) => s !== "11")
).size;
const countryCount = countries.visited.length;
const parkCount = parks.visited.length;

const cards = [
  {
    to: "/travel/counties",
    title: "US Counties",
    stat: `${countyCount} counties · ${stateCount} of 48 mainland states + DC`,
    blurb:
      "Interactive US county map with an alphabetical list of every county visited and the specific places within each.",
    updated: counties.lastUpdated,
  },
  {
    to: "/travel/countries",
    title: "Countries",
    stat: `${countryCount} countries visited (excluding home country)`,
    blurb:
      "Countries visited internationally, grouped by continent, with cities and specific places within each.",
    updated: countries.lastUpdated,
  },
  {
    to: "/travel/parks",
    title: "US National Parks",
    stat: `${parkCount} of ${parks.totalUSNationalParks} US National Parks`,
    blurb:
      "The 63 official US National Park designations (excludes National Monuments, Lakeshores, Historic Sites, etc.).",
    updated: parks.lastUpdated,
  },
];

function TravelLanding() {
  return (
    <main className="travel-landing">
      <header className="travel-landing-hero">
        <h1>Travel</h1>
        <p className="travel-landing-lead">
          A running record of places I've been — organized by geography.
        </p>
      </header>

      <div className="travel-landing-cards">
        {cards.map((card) => (
          <Link className="travel-landing-card" to={card.to} key={card.title}>
            <div className="travel-landing-card-title">{card.title}</div>
            <div className="travel-landing-card-stat">{card.stat}</div>
            <p className="travel-landing-card-blurb">{card.blurb}</p>
            <div className="travel-landing-card-updated">
              Last updated: {card.updated}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default TravelLanding;
