import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="social_media_icons">
        <span className="icon">
          <FaFacebookF />
        </span>
        <span className="icon">
          <FaLinkedinIn />
        </span>
        <span className="icon">
          <AiOutlineTwitter />
        </span>
        <span className="icon">
          <BsInstagram />
        </span>
      </div>

      <div className="footer_links">
        <ul className="footer_items">
          <li>Novorésumé</li>
          <li>Homepage</li>
          <li>Resume Templates</li>
          <li>CV Templates</li>
          <li>Cover Letters</li>
        </ul>
        <ul className="footer_items">
          <li>Learn</li>
          <li>Career Blog</li>
          <li>How to Write a Resume</li>
          <li>How to Write CV</li>
          <li>How to Write a Cover Letter</li>
          <li>Resume Examples</li>
          <li>Cover Letter Examples</li>
        </ul>
        <ul className="footer_items">
          <li>Other</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>E-book: How to get a job in 2022</li>
          <li>Media Kit</li>
          <li>Help Center</li>
        </ul>
        <ul className="footer_items">
          <li>Legal/Contact</li>
          <li>Homepage</li>
          <li>Resume Templates</li>
          <li>CV Templates</li>
          <li>Cover Letters</li>
        </ul>
      </div>

      <div className="copyright">
        <p>Our Vision is to </p>
        <h1> Fight Galactic Unemployment</h1>
        <p>Ny Carlsberg Vej 80 </p>
        <p>DK 1799 Copenhagen, Denmark</p>
        <p> Copyright © 2022 Novorésumé ApS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
