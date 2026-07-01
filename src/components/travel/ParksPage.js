import React, { useMemo } from "react";
import parks from "../../data/travel/parks";
import "./ParksPage.css";

function ParksPage() {
  // Sort alphabetically by park name for display.
  const sorted = useMemo(
    () => parks.visited.slice().sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const visitedCount = parks.visited.length;
  const total = parks.totalUSNationalParks;
  const pct = Math.round((visitedCount / total) * 100);

  return (
    <main className="parks-page">
      <header className="parks-hero">
        <h1>US National Parks Visited</h1>
        <p className="parks-stats">
          <strong>{visitedCount}</strong> of <strong>{total}</strong> official US
          National Parks ({pct}%)
        </p>
        <p className="parks-scope-note">
          Scope: the 63 official "National Park" designations only. Excludes
          National Monuments, National Lakeshores, National Historic Sites, and
          other NPS unit types.
        </p>
        <p className="parks-updated">Last updated: {parks.lastUpdated}</p>
      </header>

      <section className="parks-list">
        {sorted.map((p) => (
          <div className="park" key={p.name}>
            <div className="park-name">{p.name} National Park</div>
            <div className="park-meta">
              {p.states.join(" / ")}
              {p.counties && p.counties.length > 0 && (
                <>
                  {" · "}
                  <span className="park-counties">
                    {p.counties.join(", ")}
                    {p.counties.length === 1 ? " County" : " Counties"}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ParksPage;
