import { useParams } from "react-router-dom";
import giftCardsData from "./../../assets/data/gift-cards-data.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./GiftCardPage.scss";

const GiftCardPage = ({ setCart, cart, setIsCartActive }) => {
	const { id } = useParams();

	const [qty, setQty] = useState(1);

	const addToCart = (item, qty) => {
		setCart((prevCart) => {
			// const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

			// if (existingItem) {
			// 	return prevCart.map((cartItem) =>
			// 		cartItem.id === item.id
			// 			? { ...cartItem, itemQty: cartItem.itemQty + qty }
			// 			: item
			// 	);
			// } else {
			return [...prevCart, { ...item, itemQty: qty }];
			// }
		});

		const element = document.createElement("div");

		element.textContent = "Added to Cart";

		const giftCardPage = document.querySelector(".gift-card-page");

		giftCardPage.appendChild(element);

		Object.assign(element.style, {
			position: "fixed",
			top: "10px",
			left: "10px",
			right: "10px",
			height: "50px",
			backgroundColor: "var(--accent-clr)",
			color: "#000",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: "25px",
		});

		setTimeout(() => {
			element.remove();
			setIsCartActive(true);
		}, 3000);
	};

	const giftCard = giftCardsData.find((giftCard) => giftCard.id == id);

	// FIXME: method some() is more efficient here and return boolean and not data
	const itemIsInCart = cart.some((cartItem) => cartItem.id == giftCard.id);

	return (
		<>
			<main className="gift-card-page">
				<NavLink className="gift-card-page__link" to="/shop">
					Back to Shop
				</NavLink>
				<h1 className="gift-card-page__title">{giftCard.name}</h1>
				<div className="gift-card-page__img-container">
					<img src={giftCard.img} alt="" />
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<p style={{ fontSize: "1.5rem" }}>
						$ {(giftCard.priceCents / 100).toFixed(2)}
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: 5,
						}}
					>
						<button
							onClick={() => setQty(Math.max(qty - 1, 1))}
							className="qty-btn"
							disabled={qty === 1}
						>
							-
						</button>
						<p className="qty-txt">{qty}</p>
						<button
							onClick={() => setQty(Math.min(qty + 1, 10))}
							className="qty-btn"
							disabled={qty === 10}
						>
							+
						</button>
					</div>
				</div>
				{!itemIsInCart ? (
					<button
						className="gift-card-page__add-to-cart-btn"
						onClick={() => addToCart(giftCard, Number(qty))}
					>
						Add to Cart
					</button>
				) : (
					<button
						className="gift-card-page__add-to-cart-btn"
						onClick={() => setIsCartActive(true)}
					>
						In Cart
					</button>
				)}
			</main>
		</>
	);
};

export default GiftCardPage;
