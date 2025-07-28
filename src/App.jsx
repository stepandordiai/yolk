import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Menu from "./pages/Menu/Menu";
import BookATable from "./components/BookATable/BookATable";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Preload from "./components/Preload/Preload";
import "./scss/App.scss";
import Shop from "./pages/Shop/Shop";

function App() {
	return (
		<>
			<Preload />
			<Header />
			<BookATable />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
