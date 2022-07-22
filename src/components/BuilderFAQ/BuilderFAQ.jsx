import React from "react";
import "./builderFAQ.css";
import Faq1 from "../../assets/faq1.png";
import Faq2 from "../../assets/faqs2.png";
import Faq3 from "../../assets/faqs4.png";
import Faq4 from "../../assets/faqs5.png";
import Faq5 from "../../assets/faqs6.png";
import Faq6 from "../../assets/faqs7.png";
import RevealComponent from "../RevealComponent/RevealComponent";


const BuilderFAQ = () => {
  return (
    <div className="container BuilderFAQ_container">
      <h1>Resume Builder FAQ.</h1>

      <div className="builder_faqs_contents">
        <div className="builder_faqs">
          <div className="faqs_img">
            <img src={Faq1} alt="Faq1" />
          </div>
          <div className="faq_text_content">
            <h2>Why should I use a resume builder?</h2>
            <p>
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?
            </p>
            <p>
              The whole process is a huge pain – you make a TINY change to your
              resume, and the entire resume layout gets completely messed up.
            </p>
            <p>
              With a resume builder, you don’t have to worry about the nitty
              gritty of resume creation, like font selection, layout,
              formatting, etc.
            </p>
            <p>
              All you have to do is pick a resume template, fill it in, and then
              you’re ready to start applying for jobs!
            </p>
          </div>
          <div className="faq_empty_content"></div>
        </div>

        {/* todo  have to replace content */}
        <div className="builder_faqs">
          <div className="faqs_img">
            <RevealComponent>
            <img src={Faq2} alt="Faq2" />
            </RevealComponent>
          </div>
          <div className="faq_text_content">
            <h2>What is the best resume builder?</h2>
            <p>
            Over the past 7 years, we’ve been working hard to make Novorésumé the best resume builder out there.
            </p>
            <p>
            And we’d say we succeeded! Here’s what sets us apart from the rest of the competition:
            </p>
            <ul>
              <li><b> Easy to Use</b> - Our builder is very easy to use, even if you're not too tech-friendly.</li>
              <li><b>Get Started in under 5 Minutes</b> - Just pick one of our resume templates, and you're good to go!</li>
              <li><b>It's 100% free</b> - Some resume builders out there pretend to be free… and then they hit you with a paywall once you’re done writing your resume! We don’t do that. Our builder will instantly notify you if you’re using any of our premium features.</li>
              <li><b>Cover Letter Builder </b>- If you’re using Novorésumé Premium, you gain access to our cover letter builder for free (including matching cover letter templates).</li>
              <li><b>Tons of Customization and Design Options </b>- Our builder offers a ton of customization. You can make changes to the layout, color schemes, and much more.</li>
              <li><b>ATS-Friendly Resume Templates</b> - Our resume templates are built on top of some of the most popular applicant tracking systems out there. Meaning, your resume won't automatically get rejected by any ATS.</li>
            </ul>
            
          </div>
          <div className="faq_empty_content"></div>
        </div>

        <div className="builder_faqs">
          <div className="faqs_img">
          <RevealComponent>
            <img src={Faq3} alt="Faq3" />
            </RevealComponent>
          </div>
          <div className="faq_text_content">
            <h2>Is this a completely free resume builder?</h2>
            <p>Yes, Novorésumé is a 100% free resume builder.</p>
            <p>
              If you’re on a budget, you can use it to create your resume
              completely free of charge. And no, unlike some other resume
              builders out there, we don’t hit you with a paywall once you’ve
              completed your resume.
            </p>
            <p>
              If you use any of our premium features, the software will let you
              know about it. It will then ask if you did it accidentally, or if
              you would like to upgrade to Novorésumé Premium. You're in
              control!
            </p>
          </div>
          <div className="faq_empty_content"></div>
        </div>

        <div className="builder_faqs">
          <div className="faqs_img">
          <RevealComponent>
            <img src={Faq4} alt="Faq4" />
            </RevealComponent>
          </div>
          <div className="faq_text_content">
            <h2>What is a resume?</h2>
            <p>
            A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history.
            </p>
            <p style={{marginBottom:"1rem"}}>
            It usually includes information about the following:
            </p>
            <ul>
              <li>Your work history</li>
              <li>Educational background</li>
              <li>Achievements</li>
              <li>Contact information</li>
              <li>Resume summary or resume objective</li>
            </ul>
          </div>
          <div className="faq_empty_content"></div>
        </div>

        <div className="builder_faqs">
          <div className="faqs_img">
          <RevealComponent>
            <img src={Faq5} alt="Faq5" />
            </RevealComponent>
          </div>
          <div className="faq_text_content">
            <h2>What's the difference between a CV and a resume?</h2>
            <p>
              In the EU, the words "CV" and "resume" are used interchangeably
            </p>
            <p>
              In the United States, however, a resume is a document you use to
              apply for jobs, while a CV is mainly used by academics.
            </p>
            <p>
              Want to learn more? Check out our article on the differences
              between CVs and resumes.
            </p>
          </div>
          <div className="faq_empty_content"></div>
        </div>

        <div className="builder_faqs">
          <div className="faqs_img">
          <RevealComponent>
            <img src={Faq6} alt="Faq6" />
            </RevealComponent>
          </div>
          <div className="faq_text_content">
            <h2>How can I create my resume?</h2>
            <p>Making a resume with Novorésumé is very straightforward.</p>
            <p>
              The whole process is a huge pain – you make a TINY change to your
              resume, and the entire resume layout gets completely messed up.
            </p>
            <p>Just pick one of our professional resume templates.</p>
            <p>
              Then, you’ll be forwarded to our resume builder, where all you
              have to do is fill in your resume content!
            </p>
          </div>
          <div className="faq_empty_content"></div>
        </div>
      </div>
    </div>
  );
};

export default BuilderFAQ;
