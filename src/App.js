import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import VideoOverlay from "./components/VideoOverlay/VideoOverlay";
import { useSelector } from "react-redux";
import { ShowVideoAdSelector } from "./app/VideoSlice";
import HomePage from "./pages/HomePage";
import { ResumeTemplates } from "./components/Resume_Templates/ResumeTemplates.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

const App = () => {
  const showVideoAd = useSelector(ShowVideoAdSelector);

  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          {showVideoAd ? (
            <VideoOverlay />
          ) : (
            <React.Fragment>
              <Route path="/" element={<HomePage />} />
              <Route path="/resumeTemplate" element={<ResumeTemplates />} />
            </React.Fragment>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
