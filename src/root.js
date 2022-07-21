import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import VideoOverlay from "./components/VideoOverlay/VideoOverlay";

const Root = ({ children, showVideoAd }) => {
  return (
    <BrowserRouter>
      <Navbar />
      {showVideoAd ? <VideoOverlay /> : children}
      <Footer />
    </BrowserRouter>
  );
};

export default Root;
