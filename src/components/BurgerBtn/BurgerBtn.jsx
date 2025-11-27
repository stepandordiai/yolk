import { useEffect, useRef, useState } from "react";
import linksData from "./../../assets/data/links-data.json";
import { NavLink } from "react-router-dom";
import "./BurgerBtn.scss";

const BurgerBtn = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);

	useEffect(() => {
		const closeMenuOnScroll = () => setIsMenuActive(false);

		window.addEventListener("scroll", closeMenuOnScroll);

		return () => window.removeEventListener("scroll", closeMenuOnScroll);
	}, []);

	return (
		<div
			className="burger"
			onMouseEnter={() => setIsMenuActive(true)}
			onMouseLeave={() => setIsMenuActive(false)}
		>
			<button
				onClick={() => setIsMenuActive((prev) => !prev)}
				className={`burger-btn ${isMenuActive ? "burger-btn--active" : ""}`}
				aria-label={isMenuActive ? "Close menu" : "Open menu"}
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
