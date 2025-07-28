import PageTop from "../../components/PageTop/PageTop";
import giftCardsData from "./../../assets/data/gift-cards-data.json";
import { NavLink } from "react-router-dom";
import "./Shop.scss";

const Shop = () => {
	return (
		<>
			<main className="shop">
				<PageTop title="Shop" />
				<div className="">
					{giftCardsData.map((giftCard) => {
						return (
							<NavLink
								className="gift-card__container"
								to={`/gift-card-page/${giftCard.id}`}
							>
								<div>
									<img src={giftCard.img} alt="" />
								</div>
								<div>
									<p>$ {(giftCard.priceCents / 100).toFixed(2)}</p>
									<p>{giftCard.name}</p>
									<div>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Itaque pariatur autem quam. Earum aliquam debitis
										repellendus voluptatum nihil beatae ea omnis illum similique
										harum, porro obcaecati ad nostrum nisi voluptatem?
									</div>
								</div>
							</NavLink>
						);
					})}
				</div>
			</main>
		</>
	);
};

export default Shop;
