import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
	const [btnName, setBtnName] = useState("login");

	return (
		<div className="Header">
			<div className="logo">
				<img src={LOGO_URL}></img>
			</div>
			<div className="navigation">
				<ul>
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
					<li>Cart</li>
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
