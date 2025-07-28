import { NavLink } from "react-router-dom";
import "./Footer.scss";
import logoWhite from "/logo-white.png";

const Footer = () => {
	const openBookATable = () => {
		document.querySelector(".book-a-table").style.display = "flex";
	};

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
						<a href="https://stepandordiai.netlify.app/">STEPAN DORDIAI</a>
					</p>
				</div>
				<div>
					<p style={{ marginBottom: 20 }}>Pages</p>
					<nav className="footer__nav">
						<NavLink className="footer__nav-link" to="/">
							Home
						</NavLink>
						<NavLink className="footer__nav-link" to="/about">
							About
						</NavLink>
						<NavLink className="footer__nav-link" to="/menu">
							Menu
						</NavLink>
						<NavLink className="footer__nav-link" to="/contact">
							Contact
						</NavLink>
					</nav>
				</div>
				<div>
					<button onClick={openBookATable} className="footer__btn">
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
