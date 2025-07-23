import logo from "/logo-black.png";
import "./Header.scss";

const Header = () => {
	return (
		<>
			<div className="header">
				<a className="header__logo" href="">
					Y
					<img src={logo} width={20} alt="" />
					lk
				</a>
				<nav className="header__nav">
					<a href="">About</a>
					<a href="#menu">Menu</a>
					<a href="">Contact</a>
				</nav>
				<button className="header__btn">Book a table</button>
			</div>
		</>
	);
};

export default Header;
