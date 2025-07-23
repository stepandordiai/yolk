import { Helmet } from "react-helmet-async";
import img1 from "/starters-01.jpg";
import img2 from "/starters-02.jpg";
import img3 from "/starters-03.jpg";
import img4 from "/breakfast-01.jpg";
import img5 from "/breakfast-02.jpg";
import img6 from "/breakfast-03.jpg";
import img7 from "/breakfast-04.jpg";
import img8 from "/dinner-01.jpg";
import img9 from "/dinner-02.jpg";
import img10 from "/dinner-03.jpg";
import img11 from "/dinner-05.jpg";
import img12 from "/drinks-01.jpg";
import img13 from "/drinks-02.jpg";
import img14 from "/drinks-03.jpg";
import "./Menu.scss";
import { useEffect } from "react";

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
				if (elRect.top <= 100 && elRect.bottom > 0) {
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
			<div className="menu">
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
					<a className="menu__nav-link" href="#wine">
						Wine
					</a>
					<a className="menu__nav-link" href="#drinks">
						Drinks
					</a>
				</nav>
				<div className="menu__inner">
					<p className="menu__inner-title" id="starters">
						Starters
					</p>
					<div
						className="menu__item menu__item-special"
						data-special-value="Starter of the Day"
					>
						<div className="menu__item-img-wrapper">
							<img src={img1} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Tomato toast</p>
								<p>$29.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img2} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Noodle Soup</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img3} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Pumpkin Soup</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
				</div>
				<div className="menu__inner">
					<p className="menu__inner-title" id="lunch">
						Lunch
					</p>
					<div
						className="menu__item menu__item-special"
						data-special-value="Lunch of the Day"
					>
						<div className="menu__item-img-wrapper">
							<img src={img4} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Delicious Pancakes</p>
								<p>$6.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img5} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Sweet Heaven</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img6} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Oatmeal Spirit</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img7} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Avocado Smash</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
				</div>
				<div className="menu__inner">
					<p className="menu__inner-title" id="dinner">
						Dinner
					</p>
					<div
						className="menu__item menu__item-special"
						data-special-value="Dinner of the Day"
					>
						<div className="menu__item-img-wrapper">
							<img src={img8} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Italian Pizza</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img9} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Sea Curry</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img10} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Vegan Burger</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img11} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Noodle Bowl</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
				</div>
				<div className="menu__inner">
					<p className="menu__inner-title" id="wine">
						Wine
					</p>
					<div
						className="menu__item menu__item-special"
						data-special-value="Wine of the Day"
					>
						<div className="menu__item-img-wrapper">
							<img src={img1} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Tomato toast</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img1} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Tomato toast</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img1} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Tomato toast</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img1} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Tomato toast</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
				</div>
				<div className="menu__inner">
					<p className="menu__inner-title" id="drinks">
						Drinks
					</p>
					<div
						className="menu__item menu__item-special"
						data-special-value="Drink of the Day"
					>
						<div className="menu__item-img-wrapper">
							<img src={img12} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Panthouse Tonic</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img13} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Apple Breeze</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
					<div className="menu__item">
						<div className="menu__item-img-wrapper">
							<img src={img14} alt="" />
						</div>
						<div className="menu__item-info">
							<div className="menu__item-info-top">
								<p>Frenchman Blitz</p>
								<p>$5.00</p>
							</div>
							<p className="menu__item-info-bottom">
								Lorem ipsum dolor sit amet, consectetur
							</p>
						</div>
					</div>
				</div>
				<div style={{ height: 1000 }}></div>
			</div>
		</>
	);
};

export default Menu;
