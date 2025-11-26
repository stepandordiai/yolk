import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import menuData from "./../../assets/data/menu-data.json";
import PageTop from "../../components/PageTop/PageTop";
import { HashLink } from "react-router-hash-link";
import "./Menu.scss";

const uniqueMenuTypes = [...new Set(menuData.map((product) => product.type))];

const Menu = () => {
	const [fullSizeImg, setFullSizeImg] = useState(false);
	const [imgIndex, setImgIndex] = useState(0);

	const showImg = (index) => {
		setFullSizeImg(true);
		setImgIndex(index);
	};

	const hideImg = () => setFullSizeImg(false);

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
			{/* TODO: fixed element should go at the top */}
			<div
				className={`menu__full-size-img ${
					fullSizeImg ? "menu__full-size-img--active" : ""
				}`}
			>
				<img src={menuData[imgIndex].img} alt="" />
				<button onClick={hideImg} className="close-btn">
					close
				</button>
			</div>
			<main className="menu">
				<PageTop title="Menu" />
				<nav className="menu__nav">
					{uniqueMenuTypes.map((type) => {
						return (
							<HashLink className="menu__nav-link" to={`#${type}`} smooth>
								{type[0].toUpperCase() + type.slice(1)}
							</HashLink>
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
									// TODO: LEARN THIS
									const globalIndex = menuData.findIndex(
										(i) => i.id === item.id
									);
									return (
										<div
											key={item.id}
											className={`menu__item ${
												item.special ? "menu__item--special" : ""
											}`}
											data-special-value="Starter of the Day"
										>
											<div className="menu__item-img-wrapper">
												<img
													style={{ cursor: "pointer" }}
													onClick={() => showImg(globalIndex)}
													src={item.img}
													alt=""
													loading="lazy"
												/>
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
