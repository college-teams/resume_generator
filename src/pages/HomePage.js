import React from "react";
import Discover from "../components/Discover/Discover";
import Home from "../components/home/home";
import UserSection from "../components/UserSection/UserSection";
import VideoSection from "../components/VideoSection/VideoSection";


const HomePage = () => {
  return (
    <>
      <Home />
      <UserSection />
      <VideoSection />
      <Discover />
    </>
  );
};

export default HomePage;
