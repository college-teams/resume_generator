import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
// import VideoOverlay from './components/VideoOverlay/VideoOverlay';
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <VideoOverlay /> */}
      <HomePage />
    </>
  );
};

export default App;
