import { useState } from "react";
import LOGO from "../../logo-icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // let btnName = "Login";
  // let btnName = "Login";
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO} alt="LOGO_URL" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li> <Link to="/contact">Contact Us</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/cart">Cart</Link></li>
          <button
            className="btn"
            onClick={() => {
              // btnName = "Logout" ? btnName = "Logout" : btnName = "Login";
              // console.log(btnName);
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
