import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import { ResumeTemplates } from "../components/Resume_Templates/ResumeTemplates";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resumeTemplate" element={<ResumeTemplates />} />
      </Routes>
    </>
  );
};

export default AppRouter;
