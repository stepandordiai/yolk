import { useParams } from "react-router-dom";
import giftCardsData from "./../../assets/data/gift-cards-data.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./GiftCardPage.scss";

const GiftCardPage = ({ setCart }) => {
	const { id } = useParams();

	const [qty, setQty] = useState(1);

	const addToCart = (item, qty) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, itemQty: cartItem.itemQty + qty }
						: item
				);
			} else {
				return [...prevCart, { ...item, itemQty: qty }];
			}
		});
	};

	const giftCard = giftCardsData.find((giftCard) => giftCard.id == id);

	return (
		<>
			<main className="gift-card-page">
				<NavLink className="gift-card-page__link" to="/shop">
					Back to Shop
				</NavLink>
				<h1 className="gift-card-page__title">{giftCard.name}</h1>
				<img src={giftCard.img} alt="" />
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<p>$ {(giftCard.priceCents / 100).toFixed(2)}</p>
					{/* <input
						type="number"
						value={qty}
						onChange={(e) => setQty(e.target.value)}
						placeholder="Qty"
					/> */}
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							// justifyContent: "space-between",
						}}
					>
						<button className="qty-btn">-</button>
						<p className="qty-txt">{qty}</p>
						<button className="qty-btn">+</button>
					</div>
				</div>
				<button onClick={() => addToCart(giftCard, Number(qty))}>
					ADD TO CART
				</button>
			</main>
		</>
	);
};

export default GiftCardPage;
