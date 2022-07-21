import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { ShowVideoAdSelector } from "./app/VideoSlice";
import AppRouter from "./router/routes";
import Root from "./root";
import Footer from "./components/Footer/Footer"

const App = () => {
  const showVideoAd = useSelector(ShowVideoAdSelector);

  return (
    <Root showVideoAd={showVideoAd}>
      <AppRouter />
      <Footer />
    </Root>
  );
};

export default App;
