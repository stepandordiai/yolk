import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BurgerBtn.scss";

const BurgerBtn = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);

	const openMenu = () => setIsMenuActive(true);
	const closeMenu = () => setIsMenuActive(false);

	useEffect(() => {
		document.addEventListener("scroll", closeMenu);

		return () => document.removeEventListener("scroll", closeMenu);
	}, []);

	return (
		<div
			onMouseEnter={openMenu}
			onMouseLeave={closeMenu}
			onTouchStart={openMenu}
			className="burger"
		>
			<button
				className={`burger-btn ${isMenuActive ? "burger-btn--active" : ""}`}
			>
				<span
					className={`burger-btn__center-line ${
						isMenuActive ? "burger-btn__center-line--active" : ""
					}`}
				></span>
			</button>
			<div
				className={`burger-menu-wrapper ${
					isMenuActive ? "burger-menu-wrapper--active" : ""
				}`}
			>
				<div className="burger-menu-nav">
					<NavLink
						onClick={() => setIsMenuActive(false)}
						className={({ isActive }) =>
							`burger-menu-nav__link ${
								isActive ? "burger-menu-nav__link--active" : ""
							}`
						}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						onClick={() => setIsMenuActive(false)}
						className={({ isActive }) =>
							`burger-menu-nav__link ${
								isActive ? "burger-menu-nav__link--active" : ""
							}`
						}
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						onClick={() => setIsMenuActive(false)}
						className={({ isActive }) =>
							`burger-menu-nav__link ${
								isActive ? "burger-menu-nav__link--active" : ""
							}`
						}
						to="/menu"
					>
						Menu
					</NavLink>
					<NavLink
						onClick={() => setIsMenuActive(false)}
						className={({ isActive }) =>
							`burger-menu-nav__link ${
								isActive ? "burger-menu-nav__link--active" : ""
							}`
						}
						to="/shop"
					>
						Shop
					</NavLink>
					<NavLink
						onClick={() => setIsMenuActive(false)}
						className={({ isActive }) =>
							`burger-menu-nav__link ${
								isActive ? "burger-menu-nav__link--active" : ""
							}`
						}
						to="/blog"
					>
						Blog
					</NavLink>
					<NavLink
						onClick={() => setIsMenuActive(false)}
						className={({ isActive }) =>
							`burger-menu-nav__link ${
								isActive ? "burger-menu-nav__link--active" : ""
							}`
						}
						to="/contact"
					>
						Contact
					</NavLink>
				</div>
				<div className="gap"></div>
			</div>
		</div>
	);
};

export default BurgerBtn;
