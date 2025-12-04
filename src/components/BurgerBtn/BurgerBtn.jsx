import { useEffect, useState } from "react";
import linksData from "./../../assets/data/links-data.json";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
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
				className={classNames("burger-btn", {
					"burger-btn--active": isMenuActive,
				})}
				aria-label={isMenuActive ? "Close menu" : "Open menu"}
			>
				<span
					className={classNames("burger-btn__center-line", {
						"burger-btn__center-line--active": isMenuActive,
					})}
				></span>
			</button>
			<div
				className={classNames("burger-menu-wrapper", {
					"burger-menu-wrapper--active": isMenuActive,
				})}
			>
				<div className="burger-menu-nav">
					{linksData.map((link) => {
						return (
							<NavLink
								key={link.id}
								onClick={() => setIsMenuActive(false)}
								className={({ isActive }) =>
									classNames("burger-menu-nav__link", {
										"burger-menu-nav__link--active": isActive,
									})
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
