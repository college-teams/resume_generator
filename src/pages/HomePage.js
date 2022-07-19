import React from "react";
import Buildtemplates from "../components/Buildtemplates/Buildtemplates";
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
      <Buildtemplates />
    </>
  );
};

export default HomePage;
