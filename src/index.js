import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ResumePage from './components/ResumePage';

// Code-split the travel section: the counties page bundles a large counties
// dataset (~600 KB). Lazy-loading means visitors only pay for it when they
// navigate into /travel/*.
const TravelLayout = lazy(() => import('./components/travel/TravelLayout'));
const TravelLanding = lazy(() => import('./components/travel/TravelLanding'));
const CountiesPage = lazy(() => import('./components/travel/CountiesPage'));
const CountriesPage = lazy(() => import('./components/travel/CountriesPage'));
const ParksPage = lazy(() => import('./components/travel/ParksPage'));

const travelFallback = (
  <div style={{ padding: '2rem', textAlign: 'center' }}>Loading…</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route
          path="/travel"
          element={
            <Suspense fallback={travelFallback}>
              <TravelLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={travelFallback}>
                <TravelLanding />
              </Suspense>
            }
          />
          <Route
            path="counties"
            element={
              <Suspense fallback={travelFallback}>
                <CountiesPage />
              </Suspense>
            }
          />
          <Route
            path="countries"
            element={
              <Suspense fallback={travelFallback}>
                <CountriesPage />
              </Suspense>
            }
          />
          <Route
            path="parks"
            element={
              <Suspense fallback={travelFallback}>
                <ParksPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
