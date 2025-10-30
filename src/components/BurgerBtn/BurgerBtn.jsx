import { useEffect, useState } from "react";
import linksData from "./../../assets/data/links-data.json";
import { NavLink } from "react-router-dom";
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
					{linksData.map((link) => {
						return (
							<NavLink
								key={link.id}
								onClick={() => setIsMenuActive(false)}
								className={({ isActive }) =>
									`burger-menu-nav__link ${
										isActive ? "burger-menu-nav__link--active" : ""
									}`
								}
								to={link.path}
							>
								{link.name}
							</NavLink>
						);
					})}
				</div>
				<div className="gap"></div>
			</div>
		</div>
	);
};

export default BurgerBtn;
