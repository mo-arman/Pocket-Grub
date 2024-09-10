import { useState } from "react";
import LOGO from "../../logo-icon.png";

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
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
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
