import { NavLink } from "react-router-dom";
import logoWhite from "/logo-white.png";
import "./Footer.scss";

const Footer = ({ setShowBookATable }) => {
	const inactiveFooterNavLink = "footer__nav-link";
	const activeFooterNavLink = "footer__nav-link footer__nav-link--active";

	return (
		<footer className="footer">
			<div className="footer__container">
				<div>
					<NavLink className="footer__logo" to="/">
						<span>Y</span>
						<img src={logoWhite} width={40} alt="" />
						<span>lk</span>
					</NavLink>
					<p className="footer__creator">
						Made with love by{" "}
						<a href="https://stepandordiai.netlify.app/" target="_blank">
							STEPAN DORDIAI
						</a>
					</p>
				</div>
				<div>
					<p style={{ marginBottom: 20 }}>Pages</p>
					<nav className="footer__nav">
						<NavLink
							className={({ isActive }) =>
								isActive ? activeFooterNavLink : inactiveFooterNavLink
							}
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeFooterNavLink : inactiveFooterNavLink
							}
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeFooterNavLink : inactiveFooterNavLink
							}
							to="/menu"
						>
							Menu
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeFooterNavLink : inactiveFooterNavLink
							}
							to="/shop"
						>
							Shop
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeFooterNavLink : inactiveFooterNavLink
							}
							to="/blog"
						>
							Blog
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeFooterNavLink : inactiveFooterNavLink
							}
							to="/contact"
						>
							Contact
						</NavLink>
					</nav>
				</div>
				<div>
					<button
						onClick={() => setShowBookATable(true)}
						className="footer__btn"
					>
						Book a Table
					</button>
				</div>
			</div>
			<div className="footer__bottom">
				<p>All rights reserved.</p>
				<p>&copy; 2025 Yolk</p>
			</div>
		</footer>
	);
};

export default Footer;
