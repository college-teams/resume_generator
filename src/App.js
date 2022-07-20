import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import VideoOverlay from "./components/VideoOverlay/VideoOverlay";
import { useSelector } from "react-redux";
import { ShowVideoAdSelector } from "./app/VideoSlice";
import HomePage from './pages/HomePage';
import {ResumeTemplates} from './components/Resume_Templates/ResumeTemplates.jsx'

const App = () => {
  const showVideoAd = useSelector(ShowVideoAdSelector);

  return (
    <>
      <Navbar />
      {showVideoAd ? <VideoOverlay /> : <HomePage />}
    {/* <ResumeTemplates/> */}
    </>
  );
};

export default App;
