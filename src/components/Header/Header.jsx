import { NavLink } from "react-router-dom";
import logo from "/logo-black.png";
import "./Header.scss";

const Header = () => {
	return (
		<>
			<div className="header">
				<NavLink className="header__logo" to="/">
					Y
					<img src={logo} width={20} alt="" />
					lk
				</NavLink>
				<nav className="header__nav">
					<a href="">About</a>
					<NavLink to="/menu">Menu</NavLink>
					<a href="">Contact</a>
				</nav>
				<button className="header__btn">Book a table</button>
			</div>
		</>
	);
};

export default Header;
