import linksData from "./../../assets/data/links-data.json";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import logoWhite from "/logo-white.png";
import "./Footer.scss";

const Footer = ({ toggleBookATableBtn }) => {
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
						{linksData.map((link) => {
							return (
								<NavLink
									key={link.id}
									className={({ isActive }) =>
										classNames("footer__nav-link", {
											"footer__nav-link--active": isActive,
										})
									}
									to={link.path}
								>
									{link.name}
								</NavLink>
							);
						})}
					</nav>
				</div>
				<div>
					<button onClick={toggleBookATableBtn} className="footer__btn">
						Book a Table
					</button>
				</div>
			</div>
			<div className="footer__bottom">
				<p>All rights reserved.</p>
				<p>&copy; 2025-{new Date().getFullYear()} Yolk</p>
			</div>
		</footer>
	);
};

export default Footer;
