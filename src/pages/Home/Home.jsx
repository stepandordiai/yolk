import { Helmet } from "react-helmet-async";
import "./Home.scss";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>The pure taste of Thailand / Yolk</title>
			</Helmet>
			<main className="home">
				<div className="home__top">
					<h1>
						<span>The pure taste of</span>
						<br />
						Thailand
					</h1>
				</div>
			</main>
		</>
	);
};

export default Home;
