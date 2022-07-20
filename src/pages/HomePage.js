import React from "react";
import BuilderFeatures from "../components/BuilderFeatures/BuilderFeatures";
import Buildtemplates from "../components/Buildtemplates/Buildtemplates";
import Discover from "../components/Discover/Discover";
import Home from "../components/home/home";
import PremiumFeature from "../components/PremiumFeature/PremiumFeature";
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
      <BuilderFeatures />
      <PremiumFeature />
    </>
  );
};

export default HomePage;
