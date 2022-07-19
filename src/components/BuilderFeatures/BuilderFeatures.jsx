import React from "react";
import "./builderFeatures.css";
import Builder1 from "../../assets/builder1.png";
import Builder2 from "../../assets/builder2.png";
import Builder3 from "../../assets/builder3.png";
import Builder4 from "../../assets/builder4.png";
import Builder5 from "../../assets/builder5.png";
import Builder6 from "../../assets/builder6.png";

const BuilderFeatures = () => {
  return (
    <div className="container builderFeature_container">
      <header className="builderFeature_container_heading">
        Why Use The Novorésumé Resume Builder?
      </header>
      <div className="builder_features">
        <div className="builder_feature">
          <div className="builder_feature_img">
            <img src={Builder1} alt="builder1" />
          </div>
          <div className="builder_feature_text">
            <h1>Free AND Premium</h1>
            <p>
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </div>
        </div>
        <div className="builder_feature">
          <div className="builder_feature_img">
            <img src={Builder2} alt="builder2" />
          </div>
          <div className="builder_feature_text">
            <h1>Creative and Professional Resume Templates</h1>
            <p>
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </div>
        </div>
        <div className="builder_feature">
          <div className="builder_feature_img">
            <img src={Builder3} alt="builder3" />
          </div>
          <div className="builder_feature_text">
            <h1>NO Hidden Fees</h1>
            <p>
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </div>
        </div>
        <div className="builder_feature">
          <div className="builder_feature_img">
            <img src={Builder4} alt="builder4" />
          </div>
          <div className="builder_feature_text">
            <h1>ATS-Friendly</h1>
            <p>
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </div>
        </div>
        <div className="builder_feature">
          <div className="builder_feature_img">
            <img src={Builder5} alt="builder5" />
          </div>
          <div className="builder_feature_text">
            <h1>Live Content Feedback</h1>
            <p>
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </div>
        </div>
        <div className="builder_feature">
          <div className="builder_feature_img">
            <img src={Builder6} alt="builder6" />
          </div>
          <div className="builder_feature_text">
            <h1>Edit Your Resume in Real Time</h1>
            <p>
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </div>
        </div>
      </div>
      <div className="builder_feature_btn_container">
        <button className="builderFeature_btn">Try It Out Yourself</button>
      </div>
    </div>
  );
};

export default BuilderFeatures;
