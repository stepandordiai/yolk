import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Menu from "./pages/Menu/Menu";
import BookATable from "./components/BookATable/BookATable";
import Footer from "./components/Footer/Footer";
import "./scss/App.scss";

function App() {
	return (
		<Router>
			<Header />
			<BookATable />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
