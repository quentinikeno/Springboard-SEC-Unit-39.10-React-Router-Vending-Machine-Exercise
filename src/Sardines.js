import { Link } from "react-router-dom";
import "./Sardines.css";

const Sardines = () => {
	return (
		<div className="Sardines">
			<p>You don't eat the sardines, they eat you!</p>
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default Sardines;
