import { NavLink } from "react-router-dom";
import logo from "/logo-black.png";
import { useEffect } from "react";
import workingHoursIcon from "/icons/working-hours.png";
import shoppingCartIcon from "/icons/shopping-cart.png";
import "./Header.scss";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = ({ cart }) => {
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
								<li>
									<span>Monday</span>
									<span>10am - 5pm</span>
								</li>
								<li>
									<span>Tuesday</span>
									<span>10am - 5pm</span>
								</li>
								<li>
									<span>Wednesday</span>
									<span>10am - 5pm</span>
								</li>
								<li>
									<span>Thursday</span>
									<span>10am - 5pm</span>
								</li>
								<li>
									<span>Friday</span>
									<span>10am - 5pm</span>
								</li>
								<li>
									<span>Saturday</span>
									<span>Closed</span>
								</li>
								<li>
									<span>Sunday</span>
									<span>Closed</span>
								</li>
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
