import { Link } from "react-router-dom";
import sodaSrc from "./Soda.png";
import "./Soda.css";

const Soda = () => {
	return (
		<div className="Soda">
			<div className="Soda-message">
				<img src={sodaSrc} alt="soda can" />
				<p>OMG Sugar</p>
				<img src={sodaSrc} alt="soda can" />
			</div>
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default Soda;
