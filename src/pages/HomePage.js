import React from "react";

const BottomFooter = React.lazy(()=>import("../components/BottomFooter/BottomFooter"));
const BuilderFeatures = React.lazy(()=>import("../components/BuilderFeatures/BuilderFeatures"));
const Buildtemplates = React.lazy(()=>import("../components/Buildtemplates/Buildtemplates"));
const Discover = React.lazy(()=>import("../components/Discover/Discover"));
const Home = React.lazy(()=>import("../components/home/home"));
const JobSeekers = React.lazy(()=>import("../components/JobSeekers/JobSeekers"));
const PremiumFeature = React.lazy(()=>import("../components/PremiumFeature/PremiumFeature"));
const UserSection = React.lazy(()=>import("../components/UserSection/UserSection"));
const UserReview = React.lazy(()=>import("../components/UsersReview/UserReview"));
const VideoSection = React.lazy(()=>import("../components/VideoSection/VideoSection"));
const BuilderFAQ = React.lazy(()=>import("../components/BuilderFAQ/BuilderFAQ"))

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
