import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import VideoOverlay from "./components/VideoOverlay/VideoOverlay";
import ErrorBoundary from "./utils/ErrorBoundary"

const Root = ({ children, showVideoAd }) => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={"Loading"}>
        <BrowserRouter>
          <Navbar />
          {showVideoAd ? <VideoOverlay /> : children}
        </BrowserRouter>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Root;
