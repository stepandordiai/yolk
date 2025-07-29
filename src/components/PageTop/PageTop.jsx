import { NavLink } from "react-router-dom";
import logoBlack from "/logo-black.png";
import "./PageTop.scss";

const PageTop = ({ title }) => {
	return (
		<>
			<div className="page-top">
				<div>
					<NavLink className="page-top__link" to="/">
						<span>Y</span>
						<img src={logoBlack} width={20} alt="" />
						<span>lk</span>
					</NavLink>
				</div>
				<h1 className="page-top__title">{title}</h1>
			</div>
		</>
	);
};

export default PageTop;
