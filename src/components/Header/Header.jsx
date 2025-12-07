import { useEffect, useState } from "react";
import linksData from "./../../assets/data/links-data.json";
import { NavLink } from "react-router-dom";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import classNames from "classnames";
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
		// TODO: learn this
		const prevScrollY = { current: 0 };

		const handleHeaderOnScroll = () => {
			// TODO: window.scrollY is better than document.documentElement.scrollTop
			const scrollY = window.scrollY;

			setHeaderHide(scrollY > prevScrollY.current);

			prevScrollY.current = scrollY;
		};

		window.addEventListener("scroll", handleHeaderOnScroll);

		return () => window.removeEventListener("scroll", handleHeaderOnScroll);
	}, []);

	return (
		<header
			className={classNames("header", {
				"header--hide": headerHide,
			})}
		>
			<NavLink className="header__logo" to="/">
				<span>Y</span>
				<img src={logo} width={20} alt="Yolk logo" />
				<span>lk</span>
			</NavLink>
			<BurgerBtn />
			<nav className="header__nav">
				{linksData.map((link) => {
					return (
						<NavLink
							key={link.id}
							className={({ isActive }) =>
								classNames("header__nav-link", {
									"header__nav-link--active": isActive,
								})
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
							{workingHoursData.map((day, i) => {
								return (
									<li key={i}>
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
