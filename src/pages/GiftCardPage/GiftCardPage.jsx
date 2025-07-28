import { useParams } from "react-router-dom";
import giftCardsData from "./../../assets/data/gift-cards-data.json";
import "./GiftCardPage.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

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
				<NavLink to="/shop">Shop</NavLink>
				<img src={giftCard.img} alt="" />
				<h1>{giftCard.name}</h1>
				<p>{giftCard.priceCents} USD</p>
				<input
					type="number"
					value={qty}
					onChange={(e) => setQty(e.target.value)}
					placeholder="Qty"
				/>
				<p>{qty}</p>
				<button onClick={() => addToCart(giftCard, Number(qty))}>
					ADD TO CART
				</button>
			</main>
		</>
	);
};

export default GiftCardPage;
