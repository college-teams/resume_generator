import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import VideoOverlay from "./components/VideoOverlay/VideoOverlay";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import { ShowVideoAdSelector } from "./app/VideoSlice";

const App = () => {
  const showVideoAd = useSelector(ShowVideoAdSelector);

  return (
    <>
      <Navbar />
      {showVideoAd ? <VideoOverlay /> : <HomePage />}
    </>
  );
};

export default App;
