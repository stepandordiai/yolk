import logoWhite from "/logo-white.png";
import "./Preload.scss";

const Preload = () => {
	return (
		<div className="preload">
			<div className="preload__wrapper">
				<p className="preload__title">
					<span>Y</span>
					<img src={logoWhite} width={80} alt="" />
					<span>lk</span>
				</p>
			</div>
		</div>
	);
};

export default Preload;
