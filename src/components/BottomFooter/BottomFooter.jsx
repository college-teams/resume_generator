import React from "react";
import "./bottomFooter.css";
import BottomFooterIImg from "../../assets/wave-with-people.webp";

const BottomFooter = () => {
  return (
    <div className="bottomFooter">
        <div className="bottomFooter_shapes">
        <svg x="0px" y="0px" viewBox="0 0 1920 191" xmlSpace="preserve"> <path fill="white" d="M1920 1434.908s-480-94.176-960 0-960 0-960 0v-148.144h1920z" transform="translate(.5 -1286.264)"></path> </svg>
        </div>
      <div className="container bottomFooter_container">
        <h1>Ready to Jump-Start Your Career</h1>
        <button className={""}>
          get started now
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
        <p>No credit card required</p>
      </div>
      <div className="bottom_footer_img">
          <img src={BottomFooterIImg} alt="BottomFooterIImg" />
      </div>
    </div>
  );
};

export default BottomFooter;
