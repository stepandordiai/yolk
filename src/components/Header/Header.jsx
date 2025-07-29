import { NavLink } from "react-router-dom";
import logo from "/logo-black.png";
import { useEffect } from "react";
import workingHoursIcon from "/icons/working-hours.png";
import shoppingCartIcon from "/icons/shopping-cart.png";
import "./Header.scss";

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

	return (
		<>
			<div className="header">
				<NavLink className="header__logo" to="/">
					<span>Y</span>
					<img src={logo} width={20} alt="" />
					<span>lk</span>
				</NavLink>
				<nav className="header__nav">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/menu">Menu</NavLink>
					<NavLink to="/shop">Shop</NavLink>
					<NavLink to="/blog">Blog</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>
				<div className="header__working-hours">
					<img src={workingHoursIcon} width={20} alt="" />
				</div>
				<button onClick={showCart} className="header__cart">
					<img src={shoppingCartIcon} width={20} alt="" />
					{cart.length > 0 && <span>{cart.length}</span>}
				</button>
				<button onClick={openBookATable} className="header__btn">
					Book a table
				</button>
			</div>
		</>
	);
};

export default Header;
