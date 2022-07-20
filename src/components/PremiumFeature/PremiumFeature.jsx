import React from "react";
import "./premiumFeature.css";
import PremiumImg1 from "../../assets/premiumImg1.webp";
import PremiumImg2 from "../../assets/premiumImg2.webp";
import PremiumImg3 from "../../assets/premiumImg3.webp";

// import PremiumImg1 from "../../assets/resume_1.png";
// import PremiumImg2 from "../../assets/resume_2.png";
// import PremiumImg3 from "../../assets/resume_3.png";

import { AiFillStar } from "react-icons/ai";

const PremiumFeature = () => {
  return (
    <div className="container premiumFeature_container">
      <header className="premiumFeature_header">
        <h1>Premium Features for Ambitious Job-Seekers</h1>
      </header>
      <div className="premiumFeature_para">
        <p>
          The job market today is competitive – you’ll need every edge to stand
          out. Here’s how Novorésumé Premium can help you:
        </p>
      </div>
      <div className="premium_features">
        <div className="premium_feature">
          <span className="premium_feature_icon">
            <AiFillStar />
          </span>
          <div className="premium_template_img">
            <img src={PremiumImg1} alt="PremiumImg1" />
          </div>
          <div className="premium_featute_text">
            <h4>Unlimited Design Options</h4>
            <p>
              Make your resume truly yours by customizing its design, layout,
              and much more.
            </p>
          </div>
        </div>
        <div className="premium_feature">
          <span className="premium_feature_icon">
            <AiFillStar />
          </span>
          <div className="premium_template_img">
            <img src={PremiumImg2} alt="PremiumImg1" />
          </div>
          <div className="premium_featute_text">
            <h4>Unlimited Design Options</h4>
            <p>
              Make your resume truly yours by customizing its design, layout,
              and much more.
            </p>
          </div>
        </div>
        <div className="premium_feature">
          <span className="premium_feature_icon">
            <AiFillStar />
          </span>
          <div className="premium_template_img box_shadow_img">
            <img src={PremiumImg3} alt="PremiumImg1" />
          </div>
          <div className="premium_featute_text">
            <h4>Unlimited Design Options</h4>
            <p>
              Make your resume truly yours by customizing its design, layout,
              and much more.
            </p>
          </div>
        </div>
      </div>
      <button className="premiumFeature_btn">Check Out Premium</button>
    </div>
  );
};

export default PremiumFeature;
