import React from "react";
import "./jobSeekers.css";
import Sceinory from "../../assets/sceinory.webp";
import UserImg from "../../assets/users.webp";

const JobSeekers = () => {
  return (
    <div className="seekers">
      <div className="seekers_shapes">
        <div className="seekers_top_shape">
          <svg
            version="1.1"
            id="Wave"
            x="0px"
            y="0px"
            viewBox="0 0 1000 200"
            style={{ enableBackground: "new 0 0 1000 200" }}
            xmlSpace="preserve"
          >
            <path
              id="myClip"
              fill="#4bccef"
              className="st0"
              d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
            ></path>
          </svg>
        </div>
        <div className="seekers_mid_shape">
          <img src={Sceinory} alt="Sceinory" />
        </div>
        <div className="seekers_bottom_shape">
          <svg
            className="shape-svg-mid"
            viewBox="0 0 1920 140.049"
            x="0px"
            y="0px"
            xmlSpace="preserve"
          >
            {" "}
            <path
              d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z"
              transform="translate(0 -350.829)"
              fill="var(--primary-green)"
            ></path>{" "}
          </svg>
        </div>
      </div>
      <div className="seekers_text_container">
        <div className="seekers_container">
          <div className="container">
            <div className="seekers_text_box">
              <div className="seekers_text_headings">
                <h2>THE JOBSEEKER'S</h2>
                <h1>ODYSSEY</h1>
                <p>The guide to getting hired in 2022</p>
              </div>

              <div className="seekers_text_img">
                <img src={UserImg} alt="UserImg" />
              </div>
            </div>
          </div>
          <div className="seekers_text_content">
            <h1>Free eBook on Resumes and Job Searching.</h1>
            <p>
              Don’t have much career experience? Not sure how to write your
              resume, ace your interview, or land that job?
            </p>
            <ul>
              <p>
                Check out our free eBook - The Jobseekers Odyssey! We’ll teach
                you how to do the following:
              </p>
              <li>
                Create a Resume That Grabs Recruiters’ Attention Every Single
                Time
              </li>
              <li>Ace Your Interview (Even if You’re an Introvert)</li>
              <li>Find a Job You’ll Love (And Actually Get It)</li>
            </ul>
            <button className="seekers_button">Get It Free Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;
