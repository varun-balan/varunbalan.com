import React, { useMemo } from "react";
import countries from "../../data/travel/countries";
import "./CountriesPage.css";

// Continent display order — feels more natural than alphabetical for this list.
const CONTINENT_ORDER = ["Asia", "Europe", "North America"];

function CountriesPage() {
  // Group by continent, then sort countries alphabetically within each.
  const byContinent = useMemo(() => {
    const map = new Map();
    for (const c of countries.visited) {
      if (!map.has(c.continent)) map.set(c.continent, []);
      map.get(c.continent).push(c);
    }
    return CONTINENT_ORDER.filter((cont) => map.has(cont)).map((cont) => ({
      continent: cont,
      entries: map
        .get(cont)
        .slice()
        .sort((a, b) => a.country.localeCompare(b.country)),
    }));
  }, []);

  const totalCountries = countries.visited.length;
  const totalContinents = byContinent.length;

  return (
    <main className="countries-page">
      <header className="countries-hero">
        <h1>Countries Visited</h1>
        <p className="countries-stats">
          <strong>{totalCountries}</strong> countries across{" "}
          <strong>{totalContinents}</strong> continents (excluding home country)
        </p>
        <p className="countries-updated">
          Last updated: {countries.lastUpdated}
        </p>
      </header>

      {byContinent.map(({ continent, entries }) => (
        <section className="countries-continent" key={continent}>
          <h2>{continent}</h2>
          <div className="countries-list">
            {entries.map((c) => (
              <div className="country" key={c.country}>
                <h3>
                  {c.country}
                  {c.note ? (
                    <span className="country-note"> ({c.note})</span>
                  ) : null}
                </h3>

                {c.regions ? (
                  <div className="country-regions">
                    {c.regions.map((r) => (
                      <div className="country-region" key={r.name}>
                        <span className="country-region-name">{r.name}</span>
                        {r.places.length > 0 && (
                          <> — {r.places.join(", ")}</>
                        )}
                      </div>
                    ))}
                  </div>
                ) : c.places && c.places.length > 0 ? (
                  <div className="country-places">{c.places.join(", ")}</div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default CountriesPage;
