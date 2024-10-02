import { useState } from "react";
import LOGO from "../../logo-icon.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // let btnName = "Login";
  // let btnName = "Login";
  return (
    <div className="flex  justify-between bg-pink-400 h-28 shadow-2xl rounded-lg mt-1 ml-2 mr-2 ">
      <div className="">
        <img className="w-52 absolute top-[-7%]" src={LOGO} alt="LOGO_URL" />
      </div>
      <div className="flex items-center">
        <div className="">
          <ul className="flex p-4 m-4">
            <li className="px-10 font-bold text-2xl">
              Online Status: {onlineStatus ? "🌍" : "🐍"}
            </li>
            <li className="px-4 font-bold text-xl  hover:bg-purple-400 rounded-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 font-bold text-xl hover:bg-purple-400 rounded-lg">
              {" "}
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 font-bold text-xl  hover:bg-purple-400 rounded-lg">
              {" "}
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 font-bold text-xl  hover:bg-purple-400 rounded-lg">
              {" "}
              <Link to="/cart">Cart</Link>
            </li>
            <div className="px-4">
              <button
                className="bg-green-300 px-2 py-2 rounded-lg pt-1 font-bold hover:bg-purple-400 "
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
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
