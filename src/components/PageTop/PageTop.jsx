import { NavLink } from "react-router-dom";
import logoWhite from "/logo-white.png";
import "./PageTop.scss";

const PageTop = ({ title }) => {
	return (
		<>
			<div className="page-top">
				<div>
					<NavLink className="footer__logo" to="/">
						<span>Y</span>
						<img src={logoWhite} width={40} alt="" />
						<span>lk</span>
					</NavLink>
				</div>
				<div>
					<h1>{title}</h1>
				</div>
			</div>
		</>
	);
};

export default PageTop;
