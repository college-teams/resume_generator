import React from "react";
import "./premiumFeature.css";
import PremiumImg1 from "../../assets/premiumImg1.webp";
import PremiumImg2 from "../../assets/premiumImg2.webp";
import PremiumImg3 from "../../assets/premiumImg3.webp";
import PremiumImgCMP1 from "../../assets/premiumImg1.webp";
import PremiumImgCMP2 from "../../assets/compression/premiumImg2_3_11zon_3_11zon_3_11zon.jpg";
import PremiumImgCMP3 from "../../assets/compression/premiumImg3_4_11zon_4_11zon_4_11zon.jpg";
import { AiFillStar } from "react-icons/ai";
import UseLazyLoad from "../../hooks/UseLazyLoad";

const PremiumFeature = () => {
  return (
    <div className="premium">
      <div className="premium_color_shapes">
          <div className="premium_top_shape">
            <svg
              className="shape-svg-bottom"
              x="0px"
              y="0px"
              viewBox="0 0 1000 200"
              xmlSpace="preserve"
            >
              {" "}
              <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#4bccef", stopOpacity: 1 }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "#51e2c2", stopOpacity: 1 }}
                  ></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#grad3)"
                d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
              ></path>
            </svg>
          </div>
          <div className="premium_mid_shape"></div>
          <div className="premium_bottom_shape">
          <svg className="shape-svg-mid" viewBox="0 0 1920 140.049" x="0px" y="0px" xmlSpace="preserve"> <defs> <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" style={{stopColor: "#51e2c2", stopOpacity:1}}></stop> <stop offset="100%" style={{stopColor: "#4bccef", stopOpacity: 1}}></stop> </linearGradient> </defs> <path fill="url(#grad2)" d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z" transform="translate(0 -350.829)"></path> </svg>
          </div>
        </div>
     
      <div className="container premiumFeature_container">
        <header className="premiumFeature_header">
          <h1>Premium Features for Ambitious Job-Seekers</h1>
        </header>
        <div className="premiumFeature_para">
          <p>
            The job market today is competitive – you’ll need every edge to
            stand out. Here’s how Novorésumé Premium can help you:
          </p>
        </div>
        <div className="premium_features">
          <div className="premium_feature">
            <span className="premium_feature_icon">
              <AiFillStar />
            </span>
            <div className="premium_template_img premier0">
              <UseLazyLoad src={PremiumImg1} alt="PremiumImg1" data_src={PremiumImgCMP1} />
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
            <div className="premium_template_img premier1">
              <UseLazyLoad src={PremiumImg2} alt="PremiumImg1" data_src={PremiumImgCMP2} />
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
            <div className="premium_template_img box_shadow_img premier2">
              <UseLazyLoad src={PremiumImg3} alt="PremiumImg1" data_src={PremiumImgCMP3} />
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
    </div>
  );
};

export default PremiumFeature;
// 0v100H0V100z
