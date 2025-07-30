import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import logoWhite from "/logo-white.png";
import "./Home.scss";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>The pure taste of Bali / Yolk</title>
			</Helmet>
			<main className="home">
				<div className="home__top">
					<NavLink className="home-top__link" to="/">
						<span>Y</span>
						<img src={logoWhite} width={40} alt="" />
						<span>lk</span>
					</NavLink>
					<h1 className="home-top__title">
						<span>The pure taste of</span>
						<br />
						<span style={{ fontWeight: 600 }}>Bali</span>
					</h1>
				</div>
			</main>
		</>
	);
};

export default Home;
