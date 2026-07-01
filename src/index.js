import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ResumePage from './components/ResumePage';

// Code-split: the travel page bundles a large counties dataset (~600 KB).
// Lazy-loading it means visitors only pay that cost when they navigate to /travel.
const TravelPage = lazy(() => import('./components/TravelPage'));

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
            <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading map…</div>}>
              <TravelPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
