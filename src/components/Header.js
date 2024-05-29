import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Header = ({ toggleTheme, theme }) => {
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
            <button className="bg-orange-600 rounded-lg">
              <Link className="Home" to="/">
                Home
              </Link>
            </button>
          </li>
          <li>
            <button className="bg-orange-600 rounded-lg">
              <Link className="About" to="/about">
                About
              </Link>
            </button>
          </li>
          <li>
            <button className="bg-orange-600 rounded-lg">
              <Link className="Contact" to="/contact">
                Contact
              </Link>
            </button>
          </li>
          <li>
            <button className="bg-orange-600 rounded-lg">
              <Link className="Cart" to="/Cart">
                Cart{" "}
              </Link>
            </button>
          </li>
          <li>
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
          </li>
          <button className="rounded-lg bg-orange-400" onClick={toggleTheme}>
            {theme === "light" ? "Dark Theme" : "Light Theme"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
