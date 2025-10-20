import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import workingHoursIcon from "/icons/working-hours.png";
import shoppingCartIcon from "/icons/shopping-cart.png";
import logo from "/logo-black.png";
import "./Header.scss";

const Header = ({ cart }) => {
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

	const showCart = () => {
		const cart = document.querySelector(".cart");
		if (!cart.classList.contains("cart--active")) {
			cart.classList.add("cart--active");
			document
				.querySelector(".cart__curtain")
				.classList.add("cart__curtain--active");
		} else {
			cart.classList.remove("cart--active");
			document
				.querySelector(".cart__curtain")
				.classList.remove("cart__curtain--active");
		}
	};

	const inactiveLink = "header__nav-link";
	const activeLink = "header__nav-link header__nav-link--active";

	return (
		<>
			<div className="header">
				<NavLink className="header__logo" to="/">
					<span>Y</span>
					<img src={logo} width={20} alt="" />
					<span>lk</span>
				</NavLink>
				<BurgerBtn />
				<nav className="header__nav">
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/menu"
					>
						Menu
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/shop"
					>
						Shop
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/blog"
					>
						Blog
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/contact"
					>
						Contact
					</NavLink>
				</nav>
				<button onClick={showCart} className="header__cart">
					<img src={shoppingCartIcon} width={20} height={20} alt="" />
					{cart.length > 0 && <span>{cart.length}</span>}
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
				<button onClick={openBookATable} className="header__btn">
					<div>
						<p>Book a table</p>
						<p>Book a table</p>
					</div>
				</button>
			</div>
		</>
	);
};

export default Header;
