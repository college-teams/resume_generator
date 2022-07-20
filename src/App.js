import React from 'react'
import {Navbar} from './components/navbar/Navbar'
import "./App.css";
import VideoOverlay from './components/VideoOverlay/VideoOverlay';
import HomePage from './pages/HomePage';
import {ResumeTemplates} from './components/Resume_Templates/ResumeTemplates.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    {/* <VideoOverlay /> */}
    {/* <HomePage /> */}
    <ResumeTemplates/>
    </>
  )
}

export default App