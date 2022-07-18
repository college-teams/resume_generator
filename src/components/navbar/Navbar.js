import  "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="Navbar">
      <div class="Header_Left">
          <img src="https://d.novoresume.com/nvlib/images/lg.png" class="Logo1"/>
          <img src="https://d.novoresume.com/nvlib/images/lgt.png" class="Logo2"/>
      </div>
      <div class="Header_Right">
          <a href="#" class="Resume_Templates">Resume Templates </a>
          <a href="#" class="CV_Templates">CV Templates </a>
          <a href="#" class="Cover_Letters">Cover Letters </a>
          <a href='#' class="Career_Blog">Career Blog</a>
          <a href='#' class="Pricing">Pricing</a>
          <a href='#' class="EN_US">EN US</a>
          <button class="Registerbutton">Register</button>
          <button class="Signinbutton">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar