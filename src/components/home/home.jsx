import React from "react";
import homeStyle from "./home.module.css";
import Homeimg from "../../assets/home.webp";
import Feature from "../feature/Feature";

const home = () => {
  return (
    <div>
      <div className={` container ${homeStyle.home_container}`}>
        <h1 className={homeStyle.home_section_heading}>
          The online resume builder getting folks hired by BBC, Google, Apple,
          Tesla, and Airbnb.
        </h1>
        <div className={homeStyle.homegrid_left}>
          <div className={homeStyle.homegrid_left_1}>
            <h2>Build your brand-new resume in as little as 5 minutes.</h2>
            <h1>Try it for free.</h1>
          </div>
          <div className={homeStyle.homegrid_left_2}>
            <button className={"btn"}>
              get started now
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
            <p>No credit card required</p>
          </div>
        </div>
        <div className={homeStyle.homegrid_right}>
          <div className={homeStyle.home_img_glass_container}></div>
          <img src={Homeimg} alt="Home_img" />
        </div>
      </div>
      <Feature />
    </div>
  );
};

export default home;
