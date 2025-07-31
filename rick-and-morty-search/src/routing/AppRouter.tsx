import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load
const HomePage = lazy(() => import("@pages/HomePage/HomePage"));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
