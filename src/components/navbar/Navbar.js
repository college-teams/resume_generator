import  "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="Navbar">
      <img src="https://d.novoresume.com/nvlib/images/lg.png" />
      <div className="header">
        <button class="Registerbutton">Register</button>
        <button class="Signinbutton">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar