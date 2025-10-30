import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import menuData from "./../../assets/data/menu-data.json";
import PageTop from "../../components/PageTop/PageTop";
import "./Menu.scss";

const uniqueMenuTypes = [...new Set(menuData.map((product) => product.type))];

const Menu = () => {
	// FIXME:
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
				<PageTop title="Menu" />
				<nav className="menu__nav">
					{uniqueMenuTypes.map((type) => {
						return (
							<a className="menu__nav-link" href={`#${type}`}>
								{type[0].toUpperCase() + type.slice(1)}
							</a>
						);
					})}
				</nav>
				{uniqueMenuTypes.map((type) => {
					return (
						<div className="menu__inner">
							<p className="menu__inner-title" id={type}>
								{type[0].toUpperCase() + type.slice(1)}
							</p>
							{menuData
								.filter((item) => item.type === type)
								.map((item) => {
									return (
										<div
											key={item.id}
											className={`menu__item ${
												item.special ? "menu__item--special" : ""
											}`}
											data-special-value="Starter of the Day"
										>
											<div className="menu__item-img-wrapper">
												<img src={item.img} alt="" loading="lazy" />
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
					);
				})}
			</main>
		</>
	);
};

export default Menu;
