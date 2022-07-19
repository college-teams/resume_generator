import React from "react";
import "./discover.css";
import Resume1 from "../../assets/resume_1.png";
import Resume2 from "../../assets/resume_2.png";
import Resume3 from "../../assets/resume_3.png";

const Discover = () => {
  return (
    <div className="container discover_container">
      <h1 className="discover_heading">
        Resume Templates for Every Career Path.
      </h1>
      <p className="discover_para">
        You can pick one of our handcrafted resume templates above. You can
        start building your resume in less than 5 seconds, using predefined
        sections approved by recruiters worldwide. You can also customize it to
        your own needs and personality and hit 'Download'. It's THAT easy to
        use, even if you've never made a resume in your life before!
      </p>
      <div className="discover_resumes">
        <div className="resumes">
          <img src={Resume1} alt="resume1" />
          <div className="resume_content">
            <h2 className="template_header">Creative Resume Template</h2>
            <p className="template_para">
              A resume template as creative as your imagination
            </p>
          </div>
        </div>
        <div className="resumes">
          <img src={Resume2} alt="resume2" />
          <div className="resume_content">
            <h2 className="template_header">Creative Resume Template</h2>
            <p className="template_para">
              A resume template as creative as your imagination
            </p>
          </div>
        </div>
        <div className="resumes">
          <img src={Resume3} alt="resume3" />
          <div className="resume_content">
            <h2 className="template_header">Creative Resume Template</h2>
            <p className="template_para">
              A resume template as creative as your imagination
            </p>
          </div>
        </div>
      </div>
    
        <button className="discover_btn">Discover More Resumes Templates</button>
    </div>
  );
};

export default Discover;
