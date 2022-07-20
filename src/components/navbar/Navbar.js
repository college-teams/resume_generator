import { Link } from "react-router-dom";
import  "./Navbar.css";



export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Header_Left">
        <Link to="/">
          <img src="https://d.novoresume.com/nvlib/images/lg.png" alt="logo1" className="Logo1"/>
          <img src="https://d.novoresume.com/nvlib/images/lgt.png" alt="logo2" className="Logo2"/>
        </Link>
      </div>
      <div className="Header_Right">
          <Link to="/resumeTemplate" className="Resume_Templates">Resume Templates </Link>
          <a href="/#" className="CV_Templates">CV Templates </a>
          <a href="/#" className="Cover_Letters">Cover Letters </a>
          <a href='/#' className="Career_Blog">Career Blog</a>
          <a href='/#' className="Pricing">Pricing</a>
          <a href='/#' className="EN_US">EN US</a>
          <button className="Registerbutton">Register</button>
          <button className="Signinbutton">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar