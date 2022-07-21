import React from "react";
import BottomFooter from "../components/BottomFooter/BottomFooter";
import BuilderFeatures from "../components/BuilderFeatures/BuilderFeatures";
import Buildtemplates from "../components/Buildtemplates/Buildtemplates";
import Discover from "../components/Discover/Discover";
import Home from "../components/home/home";
import JobSeekers from "../components/JobSeekers/JobSeekers";
import PremiumFeature from "../components/PremiumFeature/PremiumFeature";
import UserSection from "../components/UserSection/UserSection";
import UserReview from "../components/UsersReview/UserReview";
import VideoSection from "../components/VideoSection/VideoSection";
import BuilderFAQ from "../components/BuilderFAQ/BuilderFAQ"

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
      <UserReview />
      <JobSeekers />
      <BuilderFAQ />
      <BottomFooter />
    </>
  );
};

export default HomePage;
