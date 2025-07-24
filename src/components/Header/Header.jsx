import { NavLink } from "react-router-dom";
import logo from "/logo-black.png";
import "./Header.scss";
import { useEffect } from "react";

const Header = () => {
	useEffect(() => {
		const header = document.querySelector(".header");

		let prevScroll = 0;
		const handleHeaderOnScroll = () => {
			const scroll = document.documentElement.scrollTop;
			if (scroll > prevScroll) {
				header.classList.add("header--active");
			} else {
				header.classList.remove("header--active");
			}
			prevScroll = scroll;
		};

		document.addEventListener("scroll", handleHeaderOnScroll);

		return () => {
			document.removeEventListener("scroll", handleHeaderOnScroll);
		};
	}, []);

	const openBookATable = () => {
		document.querySelector(".book-a-table").style.display = "flex";
	};

	return (
		<>
			<div className="header">
				<NavLink className="header__logo" to="/">
					<span>Y</span>
					<img src={logo} width={20} alt="" />
					<span>lk</span>
				</NavLink>
				<nav className="header__nav">
					<a href="">About</a>
					<NavLink to="/menu">Menu</NavLink>
					<a href="">Contact</a>
				</nav>
				<button onClick={openBookATable} className="header__btn">
					Book a table
				</button>
			</div>
		</>
	);
};

export default Header;
