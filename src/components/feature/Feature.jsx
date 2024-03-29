import React from "react";
import "./feature.css";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature_top">
        <svg x="0px" y="0px" viewBox="0 0 1920 191" xmlSpace="preserve">
          
          <path
            fill="white"
            d="M1920 1434.908s-480-94.176-960 0-960 0-960 0v-148.144h1920z"
            transform="translate(.5 -1286.264)"
          ></path>
        </svg>
      </div>

      <div className="feature_container">
        <div className="container ">
          <div className="feature_in_box">
            <h1 className="feature_heading">Featured In</h1>
            <div className="features_logos">
              <figure>
                {" "}
                <img src={Img1} alt="img1" />
              </figure>
              <figure>
                <img src={Img2} alt="img2" />
              </figure>
              <figure>
                <img src={Img3} alt="img3" />
              </figure>
              <figure>
                <img src={Img4} alt="img4" />
              </figure>
              <figure>
                <img src={Img5} alt="img5" />
              </figure>
              <figure>
                <img src={Img6} alt="img6" />
              </figure>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Feature;
