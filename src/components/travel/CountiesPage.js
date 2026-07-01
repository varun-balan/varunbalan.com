import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { feature } from "topojson-client";
import topo from "us-atlas/counties-10m.json";
import counties from "../../data/travel/counties";
import "./CountiesPage.css";

// Pre-extract once at module load. topojson-client's `feature()` converts the
// compact topology format into standard GeoJSON FeatureCollections.
const allCounties = feature(topo, topo.objects.counties).features;
const allStates = feature(topo, topo.objects.states).features;

// The 48 contiguous-US state FIPS codes (excludes AK 02, HI 15, and all
// territories). DC (11) is included separately for county-level rendering
// since it's part of mainland and may be visited — but it is NOT a state.
const CONTIGUOUS_STATE_FIPS = new Set([
  "01","04","05","06","08","09","10","12","13","16","17","18","19","20","21",
  "22","23","24","25","26","27","28","29","30","31","32","33","34","35","36",
  "37","38","39","40","41","42","44","45","46","47","48","49","50","51","53",
  "54","55","56",
]);
const RENDER_FIPS = new Set([...CONTIGUOUS_STATE_FIPS, "11"]);

const mapCounties = allCounties.filter((c) =>
  RENDER_FIPS.has(String(c.id).slice(0, 2))
);
const mapStates = allStates.filter((s) =>
  CONTIGUOUS_STATE_FIPS.has(String(s.id))
);
const stateNameByFips = {
  ...Object.fromEntries(allStates.map((s) => [String(s.id), s.properties.name])),
  "11": "District of Columbia",
};

const TOTAL_COUNTIES_48 = mapCounties.length;
const TOTAL_STATES_48 = mapStates.length;
const INITIAL_VIEW = { coordinates: [-96, 38], zoom: 1 };

function CountiesPage() {
  const [position, setPosition] = useState(INITIAL_VIEW);
  const [hovered, setHovered] = useState(null);

  // Derive the FIPS-only set used for the choropleth highlighting.
  const visitedSet = useMemo(
    () => new Set(counties.visited.map((v) => v.fips)),
    []
  );

  const visitedCount = visitedSet.size;
  // "States represented" excludes DC (FIPS 11) since DC is not a state.
  const statesRepresented = useMemo(() => {
    const stateFipsSet = new Set();
    for (const fips of visitedSet) {
      const sf = String(fips).slice(0, 2);
      if (sf !== "11") stateFipsSet.add(sf);
    }
    return stateFipsSet.size;
  }, [visitedSet]);

  // Group entries by state; states sorted alphabetically, entries within each
  // state sorted by label. Used by the inventory list below the map.
  const groupedByState = useMemo(() => {
    const map = new Map();
    for (const entry of counties.visited) {
      if (!map.has(entry.state)) map.set(entry.state, []);
      map.get(entry.state).push(entry);
    }
    return [...map.keys()]
      .sort((a, b) => a.localeCompare(b))
      .map((state) => ({
        state,
        entries: map
          .get(state)
          .slice()
          .sort((a, b) => a.label.localeCompare(b.label)),
      }));
  }, []);

  function zoomIn() {
    setPosition((p) => ({ ...p, zoom: Math.min(p.zoom * 2, 32) }));
  }
  function zoomOut() {
    setPosition((p) => ({ ...p, zoom: Math.max(p.zoom / 2, 1) }));
  }
  function resetView() {
    setPosition(INITIAL_VIEW);
  }

  return (
    <main className="counties-page">
      <header className="counties-hero">
        <h1>Counties Visited</h1>
        <p className="counties-stats">
          <strong>{visitedCount}</strong> of {TOTAL_COUNTIES_48} counties
          {" · "}
          <strong>{statesRepresented}</strong> of {TOTAL_STATES_48} mainland
          states represented
        </p>
        <p className="counties-hint">
          Drag to pan, scroll/pinch to zoom, or use the buttons. Hover (or tap
          on mobile) a county for details.
        </p>
        <p className="counties-updated">Last updated: {counties.lastUpdated}</p>
      </header>

      <div className="counties-layout">
        <div className="map-wrapper">
          <div className="map-controls">
            <button onClick={zoomIn} aria-label="Zoom in">+</button>
            <button onClick={zoomOut} aria-label="Zoom out">−</button>
            <button onClick={resetView} aria-label="Reset view">Reset</button>
          </div>
          <ComposableMap
            projection="geoAlbersUsa"
            width={980}
            height={600}
            style={{ width: "100%", height: "auto" }}
          >
            <ZoomableGroup
              center={position.coordinates}
              zoom={position.zoom}
              onMoveEnd={setPosition}
              minZoom={1}
              maxZoom={32}
            >
              {/* Counties — filled per visited status, interactive on hover. */}
              <Geographies geography={{ type: "FeatureCollection", features: mapCounties }}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const fips = String(geo.id);
                    const visited = visitedSet.has(fips);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={visited ? "#3e8ae2" : "#e6e6e6"}
                        stroke="#ffffff"
                        strokeWidth={0.3}
                        onMouseEnter={() =>
                          setHovered({
                            name: geo.properties.name,
                            state: stateNameByFips[fips.slice(0, 2)],
                            visited,
                          })
                        }
                        onMouseLeave={() => setHovered(null)}
                        onClick={() =>
                          setHovered({
                            name: geo.properties.name,
                            state: stateNameByFips[fips.slice(0, 2)],
                            visited,
                          })
                        }
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: visited ? "#2f6fbb" : "#cccccc",
                            outline: "none",
                            cursor: "pointer",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* State borders on top for visual orientation. */}
              <Geographies geography={{ type: "FeatureCollection", features: mapStates }}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="transparent"
                      stroke="#666"
                      strokeWidth={0.7}
                      style={{
                        default: { outline: "none", pointerEvents: "none" },
                        hover: { outline: "none", pointerEvents: "none" },
                        pressed: { outline: "none", pointerEvents: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>

        <aside className="info-card">
          {hovered ? (
            <>
              <div className="info-name">{hovered.name}</div>
              <div className="info-state">{hovered.state}</div>
              <div
                className={`info-status ${
                  hovered.visited ? "visited" : "unvisited"
                }`}
              >
                {hovered.visited ? "✓ Visited" : "Not visited yet"}
              </div>
            </>
          ) : (
            <div className="info-prompt">Hover or tap a county</div>
          )}
        </aside>
      </div>

      <section className="counties-list">
        <h2>Where I've Been</h2>
        <div className="counties-list-columns">
          {groupedByState.map(({ state, entries }) => (
            <div className="counties-state" key={state}>
              <h3>{state}</h3>
              <ul>
                {entries.map((e) => (
                  <li key={e.fips}>
                    <strong>{e.label}</strong>
                    {e.places.length > 0 && <> — {e.places.join(", ")}</>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CountiesPage;
