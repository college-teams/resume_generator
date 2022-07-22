import React from "react";
import "./discover.css";
import Resume1 from "../../assets/resume_1.png";
import Resume2 from "../../assets/resume_2.png";
import Resume3 from "../../assets/resume_3.png";

import ResumeCMP1 from "../../assets/compression/resume_1_5_11zon_5_11zon_5_11zon.jpg";
import ResumeCMP2 from "../../assets/compression/resume_2_6_11zon_6_11zon_6_11zon.jpg";
import ResumeCMP3 from "../../assets/compression/resume_3_7_11zon_7_11zon_7_11zon.jpg";
import UseLazyLoad from "../../hooks/UseLazyLoad";

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
          <UseLazyLoad src={Resume1} alt="resume1"  data_src={ResumeCMP1}/>
          <div className="resume_content">
            <h2 className="template_header">Creative Resume Template</h2>
            <p className="template_para">
              A resume template as creative as your imagination
            </p>
          </div>
        </div>
        <div className="resumes">
          <UseLazyLoad src={Resume2} alt="resume2"  data_src={ResumeCMP2}/>
          <div className="resume_content">
            <h2 className="template_header">Creative Resume Template</h2>
            <p className="template_para">
              A resume template as creative as your imagination
            </p>
          </div>
        </div>
        <div className="resumes">
          <UseLazyLoad src={Resume3} alt="resume3" data_src={ResumeCMP3} />
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
