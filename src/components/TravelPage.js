import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { feature } from "topojson-client";
import topo from "us-atlas/counties-10m.json";
import Header from "./Header";
import travel from "../data/travel";
import "./TravelPage.css";

// Pre-extract once at module load. topojson-client's `feature()` converts the
// compact topology format into standard GeoJSON FeatureCollections.
const allCounties = feature(topo, topo.objects.counties).features;
const allStates = feature(topo, topo.objects.states).features;

// The 48 contiguous-US state FIPS codes (excludes AK 02, HI 15, DC 11, and
// any territories). Used to filter the topojson down to exactly "mainland 48".
const CONTIGUOUS_STATE_FIPS = new Set([
  "01","04","05","06","08","09","10","12","13","16","17","18","19","20","21",
  "22","23","24","25","26","27","28","29","30","31","32","33","34","35","36",
  "37","38","39","40","41","42","44","45","46","47","48","49","50","51","53",
  "54","55","56",
]);

const counties = allCounties.filter((c) =>
  CONTIGUOUS_STATE_FIPS.has(String(c.id).slice(0, 2))
);
const states = allStates.filter((s) =>
  CONTIGUOUS_STATE_FIPS.has(String(s.id))
);
const stateNameByFips = Object.fromEntries(
  states.map((s) => [String(s.id), s.properties.name])
);

const TOTAL_COUNTIES_48 = counties.length;
const TOTAL_STATES_48 = states.length;

const INITIAL_VIEW = { coordinates: [-96, 38], zoom: 1 };

function TravelPage() {
  const [position, setPosition] = useState(INITIAL_VIEW);
  const [hovered, setHovered] = useState(null);

  const visitedSet = useMemo(() => new Set(travel.visited), []);

  const visitedCount = visitedSet.size;
  const statesRepresented = useMemo(
    () => new Set([...visitedSet].map((fips) => String(fips).slice(0, 2))).size,
    [visitedSet]
  );

  function zoomIn() {
    setPosition((p) => ({ ...p, zoom: Math.min(p.zoom * 1.6, 12) }));
  }
  function zoomOut() {
    setPosition((p) => ({ ...p, zoom: Math.max(p.zoom / 1.6, 1) }));
  }
  function resetView() {
    setPosition(INITIAL_VIEW);
  }

  return (
    <div className="TravelPage">
      <Header />
      <main className="travel">
        <header className="travel-hero">
          <h1>Counties Visited</h1>
          <p className="travel-stats">
            <strong>{visitedCount}</strong> of {TOTAL_COUNTIES_48} counties
            {" · "}
            <strong>{statesRepresented}</strong> of {TOTAL_STATES_48} mainland
            states represented
          </p>
          <p className="travel-hint">
            Drag to pan, scroll/pinch to zoom, or use the buttons. Hover (or tap
            on mobile) a county for details.
          </p>
        </header>

        <div className="travel-layout">
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
                maxZoom={12}
              >
                {/* Counties — filled per visited status, interactive on hover. */}
                <Geographies geography={{ type: "FeatureCollection", features: counties }}>
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
                <Geographies geography={{ type: "FeatureCollection", features: states }}>
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
      </main>
    </div>
  );
}

export default TravelPage;
