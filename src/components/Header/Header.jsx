import { useEffect, useState } from "react";
import linksData from "./../../assets/data/links-data.json";
import { NavLink } from "react-router-dom";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import workingHoursIcon from "/icons/working-hours.png";
import shoppingCartIcon from "/icons/shopping-cart.png";
import logo from "/logo-black.png";
import "./Header.scss";

const workingHoursData = [
	{
		name: "Monday",
		hours: "10am - 5pm",
	},
	{
		name: "Tuesday",
		hours: "10am - 5pm",
	},
	{
		name: "Wednesday",
		hours: "10am - 5pm",
	},
	{
		name: "Thursday",
		hours: "10am - 5pm",
	},
	{
		name: "Friday",
		hours: "10am - 5pm",
	},
	{
		name: "Saturday",
		hours: "Closed",
	},
	{
		name: "Sunday",
		hours: "Closed",
	},
];

const Header = ({ cart, toggleBookATableBtn, setIsCartActive }) => {
	const [headerHide, setHeaderHide] = useState(false);

	useEffect(() => {
		let prevScrollTop = 0;
		const handleHeaderOnScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > prevScrollTop) {
				setHeaderHide(true);
			} else {
				setHeaderHide(false);
			}
			prevScrollTop = scrollTop;
		};

		document.addEventListener("scroll", handleHeaderOnScroll);

		return () => document.removeEventListener("scroll", handleHeaderOnScroll);
	}, []);

	return (
		<header className={`header ${headerHide ? "header--hide" : ""}`}>
			<NavLink className="header__logo" to="/">
				<span>Y</span>
				<img src={logo} width={20} alt="" />
				<span>lk</span>
			</NavLink>
			<BurgerBtn />
			<nav className="header__nav">
				{linksData.map((link) => {
					return (
						<NavLink
							key={link.id}
							className={({ isActive }) =>
								`header__nav-link ${isActive ? "header__nav-link--active" : ""}`
							}
							to={link.path}
						>
							{link.name}
						</NavLink>
					);
				})}
			</nav>
			<button onClick={() => setIsCartActive(true)} className="header__cart">
				<img src={shoppingCartIcon} width={20} height={20} alt="" />
				<span>{cart.length}</span>
			</button>
			<div className="header__working-hours">
				<img src={workingHoursIcon} width={20} height={20} alt="" />
				<div className="working-hours-wrapper">
					<div className="header__working-hours-container">
						<p className="working-hours-title">Working Hours</p>
						<ul className="working-hours-list">
							{workingHoursData.map((day) => {
								return (
									<li>
										<span>{day.name}</span>
										<span>{day.hours}</span>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="gap"></div>
				</div>
			</div>
			<button onClick={toggleBookATableBtn} className="header__btn">
				<div>
					<p>Book a table</p>
					<p>Book a table</p>
				</div>
			</button>
		</header>
	);
};

export default Header;
