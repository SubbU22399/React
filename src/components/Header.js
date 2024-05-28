import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const [attribute, setAttribute] = useState("null");
  const onlineStatus = useStatus();
  return (
    <div className="header flex justify-between bg-orange-100 shadow-xl m-4 rounded-lg">
      <div className="logo">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div className="Navigation flex items-center">
        <ul className="flex p-5 m-5 space-x-10">
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
            className={attribute}
            onClick={() => {
              btnName == "login" ? setBtnName("Logout") : setBtnName("login");
              btnName == "login"
                ? setAttribute("bg-red-600  rounded-lg font-bold")
                : setAttribute("bg-green-600 rounded-lg font-bold");
            }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
