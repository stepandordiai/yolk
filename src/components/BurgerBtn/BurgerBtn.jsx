import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./BurgerBtn.scss";

const BurgerBtn = () => {
	useEffect(() => {
		document.querySelector(".burger").addEventListener("mouseenter", () => {
			document
				.querySelector(".burger-menu-wrapper")
				.classList.add("burger-menu-wrapper--active");
			document.querySelector(".burger-9").classList.add("burger-9--active");
			document
				.querySelector(".burger-9__center-line")
				.classList.add("burger-9__center-line--active");
		});
		document.querySelector(".burger").addEventListener("mouseleave", () => {
			document
				.querySelector(".burger-menu-wrapper")
				.classList.remove("burger-menu-wrapper--active");
			document.querySelector(".burger-9").classList.remove("burger-9--active");
			document
				.querySelector(".burger-9__center-line")
				.classList.remove("burger-9__center-line--active");
		});

		// Mobile
		document.querySelector(".burger").addEventListener("touchstart", () => {
			document
				.querySelector(".burger-menu-wrapper")
				.classList.add("burger-menu-wrapper--active");
			document.querySelector(".burger-9").classList.add("burger-9--active");
			document
				.querySelector(".burger-9__center-line")
				.classList.add("burger-9__center-line--active");
		});

		document.querySelectorAll(".burger-menu-nav__link").forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelector(".burger-menu-wrapper")
					.classList.remove("burger-menu-wrapper--active");
				document
					.querySelector(".burger-9")
					.classList.remove("burger-9--active");
				document
					.querySelector(".burger-9__center-line")
					.classList.remove("burger-9__center-line--active");
			});
		});

		document.addEventListener("scroll", () => {
			document
				.querySelector(".burger-menu-wrapper")
				.classList.remove("burger-menu-wrapper--active");
			document.querySelector(".burger-9").classList.remove("burger-9--active");
			document
				.querySelector(".burger-9__center-line")
				.classList.remove("burger-9__center-line--active");
		});
	}, []);

	const inactiveMenuLink = "burger-menu-nav__link";
	const activeMenuLink = "burger-menu-nav__link burger-menu-nav__link--active";

	return (
		<div className="burger">
			<button className="burger-9">
				<span className="burger-9__center-line"></span>
			</button>
			<div className="burger-menu-wrapper">
				<div className="burger-menu-nav">
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to="/menu"
					>
						Menu
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to="/shop"
					>
						Shop
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to="/blog"
					>
						Blog
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
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
