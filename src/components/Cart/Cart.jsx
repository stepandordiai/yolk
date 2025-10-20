import "./Cart.scss";

const Cart = ({ cart, setCart, isCartActive, setIsCartActive }) => {
	const decreaseQty = (cartItem) => {
		setCart((prevItem) => {
			return prevItem.map((chosenItem) => {
				return chosenItem.id == cartItem.id
					? // Math.max prevents qty less than 1
					  { ...chosenItem, itemQty: Math.max(cartItem.itemQty - 1, 1) }
					: chosenItem;
			});
		});
	};

	const increaseQty = (cartItem) => {
		setCart((prevItem) => {
			return prevItem.map((chosenItem) => {
				return chosenItem.id == cartItem.id
					? // Math.min prevents qty more than 10
					  { ...chosenItem, itemQty: Math.min(cartItem.itemQty + 1, 10) }
					: chosenItem;
			});
		});
	};

	const removeItem = (cartItem) => {
		setCart((prevItem) => {
			return prevItem.filter((chosenItem) => chosenItem.id !== cartItem.id);
		});
	};

	const totalCartAmount = cart.reduce(
		(accumulator, item) => accumulator + item.itemQty * item.priceCents,
		0
	);

	let isActive = false;
	const handleDisabledCheckout = () => {
		if (isActive) return;
		isActive = true;

		const element = document.createElement("div");
		document.querySelector(".cart__footer").appendChild(element);

		Object.assign(element.style, {
			height: "30px",
			backgroundColor: "red",
			color: "#fff",
			marginTop: "20px",
			fontSize: "1rem",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		});
		element.innerText = "Checkout is disabled on this site.";

		setTimeout(() => {
			element.remove();
			isActive = false;
		}, 3000);
	};

	return (
		<>
			<div className={`cart ${isCartActive ? "cart--active" : ""}`}>
				<div>
					<button
						className="cart__close-btn"
						onClick={() => setIsCartActive(false)}
					>
						Close
					</button>
					<p className="cart__title">Cart</p>
				</div>
				<div className="cart__items">
					{cart.length > 0 && (
						<>
							{cart.map((cartItem) => {
								return (
									<div key={cartItem.id} className="cart__item">
										<div className="cart__item-img-container">
											<img src={cartItem.img} alt="" />
										</div>
										<div className="cart__item-details">
											<div>
												<p>{cartItem.name}</p>
												<p>$ {(cartItem.priceCents / 100).toFixed(2)}</p>
											</div>
											<div className="cart__item-counter">
												<button
													className="qty-btn"
													onClick={() => decreaseQty(cartItem)}
													disabled={cartItem.itemQty === 1}
												>
													-
												</button>
												<p className="qty-txt">{cartItem.itemQty}</p>
												<button
													className="qty-btn"
													onClick={() => increaseQty(cartItem)}
													disabled={cartItem.itemQty === 10}
												>
													<span>+</span>
												</button>
											</div>
										</div>
										<button
											className="cart__remove-btn"
											onClick={() => removeItem(cartItem)}
										>
											Remove
										</button>
									</div>
								);
							})}
						</>
					)}
				</div>
				<div className="cart__footer">
					<div>
						<p>Total</p>
						<p>$ {(totalCartAmount / 100).toFixed(2)}</p>
					</div>
					<button onClick={handleDisabledCheckout} className="checkout-btn">
						Checkout
					</button>
				</div>
			</div>
			<div
				onClick={() => setIsCartActive(false)}
				className={`cart__curtain ${
					isCartActive ? "cart__curtain--active" : ""
				}`}
			></div>
		</>
	);
};

export default Cart;
