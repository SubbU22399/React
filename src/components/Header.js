import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useStatus();
  return (
    <div className="Header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="navigation">
        <ul>
          <li>{onlineStatus ? "Online : 🟢" : "Offline : 🔴"}</li>
          <li>
            <Link className="Home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="About" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Contact" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="Cart" to="/Cart">
              Cart{" "}
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName == "login" ? setBtnName("Logout") : setBtnName("login");
            }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
