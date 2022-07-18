import  "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="Navbar">
      <img src="https://d.novoresume.com/nvlib/images/lg.png" alt={'logo'} />
      <div class="link">
      <a href="/#" class="Resume_Templates    ">Resume Templates </a>
      <a href="/#" class="CV_Templates     ">CV Templates </a>
      <a href="/#" class="Cover_Letters   ">Cover Letters </a>
      </div>
      <div className="header">
        <button class="Registerbutton">Register</button>
        <button class="Signinbutton">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar