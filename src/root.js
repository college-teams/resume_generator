import React from "react";
import { BrowserRouter,HashRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import VideoOverlay from "./components/VideoOverlay/VideoOverlay";
import ErrorBoundary from "./utils/ErrorBoundary"

const Root = ({ children, showVideoAd }) => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={"Loading"}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          {showVideoAd ? <VideoOverlay /> : children}
        </HashRouter>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Root;
