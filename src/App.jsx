import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Menu from "./pages/Menu/Menu";
import BookATable from "./components/BookATable/BookATable";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Preload from "./components/Preload/Preload";
import Shop from "./pages/Shop/Shop";
import GiftCardPage from "./pages/GiftCardPage/GiftCardPage";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import "./scss/App.scss";

function App() {
	const [cart, setCart] = useState([]);
	const [showBookATable, setShowBookATable] = useState(false);
	const [isCartActive, setIsCartActive] = useState(false);

	return (
		<>
			<Preload />
			<Header
				cart={cart}
				setShowBookATable={setShowBookATable}
				setIsCartActive={setIsCartActive}
			/>
			<BookATable
				showBookATable={showBookATable}
				setShowBookATable={setShowBookATable}
			/>
			<Cart
				cart={cart}
				setCart={setCart}
				isCartActive={isCartActive}
				setIsCartActive={setIsCartActive}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/gift-card-page/:id"
					element={
						<GiftCardPage
							setCart={setCart}
							cart={cart}
							setIsCartActive={setIsCartActive}
						/>
					}
				/>
			</Routes>
			<Footer setShowBookATable={setShowBookATable} />
			<ScrollToTop />
		</>
	);
}

export default App;
