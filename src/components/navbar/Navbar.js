import  "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Header_Left">
          <img src="https://d.novoresume.com/nvlib/images/lg.png" className="Logo1"/>
          <img src="https://d.novoresume.com/nvlib/images/lgt.png" className="Logo2"/>
      </div>
      <div className="Header_Right">
          <a href="#" className="Resume_Templates">Resume Templates </a>
          <a href="#" className="CV_Templates">CV Templates </a>
          <a href="#" className="Cover_Letters">Cover Letters </a>
          <a href='#' className="Career_Blog">Career Blog</a>
          <a href='#' className="Pricing">Pricing</a>
          <a href='#' className="EN_US">EN US</a>
          <button className="Registerbutton">Register</button>
          <button className="Signinbutton">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar