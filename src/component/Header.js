import LOGO from "../../logo-icon.png";

const Header = () => {
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
            <button className="btn">Login</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;