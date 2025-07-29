import PageTop from "../../components/PageTop/PageTop";
import giftCardsData from "./../../assets/data/gift-cards-data.json";
import { NavLink } from "react-router-dom";
import "./Shop.scss";

const Shop = () => {
	return (
		<>
			<main className="shop">
				<PageTop title="Shop" />
				<div className="shop__container">
					{giftCardsData.map((giftCard) => {
						return (
							<NavLink
								className="gift-card__container"
								to={`/gift-card-page/${giftCard.id}`}
							>
								<div className="gift-card__img-wrapper">
									<img width={180} src={giftCard.img} alt="" />
								</div>
								<div>
									<p>$ {(giftCard.priceCents / 100).toFixed(2)}</p>
									<p>{giftCard.name}</p>
								</div>
								<p style={{ marginLeft: "auto", color: "var(--accent-clr)" }}>
									Buy
								</p>
							</NavLink>
						);
					})}
				</div>
			</main>
		</>
	);
};

export default Shop;
