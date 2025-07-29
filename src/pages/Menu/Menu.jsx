import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import menuData from "./../../assets/data/menu-data.json";
import PageTop from "../../components/PageTop/PageTop";
import "./Menu.scss";

const Menu = () => {
	useEffect(() => {
		const nav = document.querySelectorAll(".menu__nav-link");
		const menuNav = document.querySelector(".menu__nav");
		const menuInner = document.querySelectorAll(".menu__inner");

		nav.forEach((link, index) => {
			link.addEventListener("click", () => {
				const prevLink = nav[index > 0 ? index - 1 : index];
				const prevLinkWidth = prevLink.offsetWidth;
				const offset = 20;
				const linkLeft = link.offsetLeft;

				menuNav.scrollTo({
					left: linkLeft - offset - prevLinkWidth,
					behavior: "smooth",
				});
			});
		});

		// TODO:
		let lastActiveIndex = -1;
		document.addEventListener("scroll", () => {
			menuInner.forEach((el, index) => {
				nav[index].classList.remove("menu__nav-link--active");
				const elRect = el.getBoundingClientRect();
				if (elRect.top <= 110 && elRect.bottom > 10) {
					const prevLink = nav[index > 0 ? index - 1 : index];
					const prevLinkWidth = prevLink.offsetWidth;
					const offset = 20;
					const linkLeft = nav[index].offsetLeft;
					nav[index].classList.add("menu__nav-link--active");
					if (index !== lastActiveIndex) {
						menuNav.scrollTo({
							left: linkLeft - offset - prevLinkWidth,
							behavior: "smooth",
						});
					}
					lastActiveIndex = index;
				}
			});
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>Menu / Yolk</title>
			</Helmet>
			<main className="menu">
				<PageTop title={"Menu"} />
				<nav className="menu__nav">
					<a className="menu__nav-link menu__nav-link--active" href="#starters">
						Starters
					</a>
					<a className="menu__nav-link" href="#lunch">
						Lunch
					</a>
					<a className="menu__nav-link" href="#dinner">
						Dinner
					</a>
					{/* <a className="menu__nav-link" href="#wine">
						Wine
					</a> */}
					<a className="menu__nav-link" href="#drinks">
						Drinks
					</a>
				</nav>
				<div className="menu__inner">
					<p className="menu__inner-title" id="starters">
						Starters
					</p>
					{menuData
						.filter((item) => item.type === "starters")
						.map((item) => {
							return (
								<div
									key={item.id}
									className={`menu__item ${
										item.special && "menu__item-special"
									}`}
									data-special-value={item.special}
								>
									<div className="menu__item-img-wrapper">
										<img src={item.img} alt="" />
									</div>
									<div className="menu__item-info">
										<div className="menu__item-info-top">
											<p>{item.name}</p>
											<p>$ {(item.priceCents / 100).toFixed(2)}</p>
										</div>
										<p className="menu__item-info-bottom">
											Lorem ipsum dolor sit amet, consectetur
										</p>
									</div>
								</div>
							);
						})}
				</div>
				<div className="menu__inner">
					<p className="menu__inner-title" id="lunch">
						Lunch
					</p>
					{menuData
						.filter((item) => item.type === "breakfast")
						.map((item) => {
							return (
								<div
									key={item.id}
									className="menu__item"
									data-special-value="Starter of the Day"
								>
									<div className="menu__item-img-wrapper">
										<img src={item.img} alt="" />
									</div>
									<div className="menu__item-info">
										<div className="menu__item-info-top">
											<p>{item.name}</p>
											<p>$ {(item.priceCents / 100).toFixed(2)}</p>
										</div>
										<p className="menu__item-info-bottom">
											Lorem ipsum dolor sit amet, consectetur
										</p>
									</div>
								</div>
							);
						})}
				</div>
				<div className="menu__inner">
					<p className="menu__inner-title" id="dinner">
						Dinner
					</p>
					{menuData
						.filter((item) => item.type === "dinner")
						.map((item) => {
							return (
								<div
									key={item.id}
									className="menu__item"
									data-special-value="Starter of the Day"
								>
									<div className="menu__item-img-wrapper">
										<img src={item.img} alt="" />
									</div>
									<div className="menu__item-info">
										<div className="menu__item-info-top">
											<p>{item.name}</p>
											<p>$ {(item.priceCents / 100).toFixed(2)}</p>
										</div>
										<p className="menu__item-info-bottom">
											Lorem ipsum dolor sit amet, consectetur
										</p>
									</div>
								</div>
							);
						})}
				</div>
				<div className="menu__inner">
					<p className="menu__inner-title" id="drinks">
						Drinks
					</p>
					{menuData
						.filter((item) => item.type === "drinks")
						.map((item) => {
							return (
								<div
									key={item.id}
									className="menu__item"
									data-special-value="Starter of the Day"
								>
									<div className="menu__item-img-wrapper">
										<img src={item.img} alt="" />
									</div>
									<div className="menu__item-info">
										<div className="menu__item-info-top">
											<p>{item.name}</p>
											<p>$ {(item.priceCents / 100).toFixed(2)}</p>
										</div>
										<p className="menu__item-info-bottom">
											Lorem ipsum dolor sit amet, consectetur
										</p>
									</div>
								</div>
							);
						})}
				</div>
			</main>
		</>
	);
};

export default Menu;
