import { Link } from "react-router-dom";
import { useState } from "react";
import chipSrc from "./Chips.png";
import { v4 as uuid } from "uuid";
import "./Chips.css";

const Chips = () => {
	const [chipBags, setChipBags] = useState([]);

	const handleClick = () => {
		const x = window.innerWidth * Math.random();
		const y = window.innerHeight * Math.random();
		setChipBags((chipBags) => [...chipBags, { x, y }]);
	};

	const bags = chipBags.map((chipBag) => (
		<img
			className="Chips-bag"
			key={uuid()}
			src={chipSrc}
			alt="Bag of Chips"
			style={{ top: `${chipBag.y}px`, left: `${chipBag.x}px` }}
		/>
	));

	return (
		<div className="Chips">
			<p>Here are some chips.</p>
			<p>You've eaten {chipBags.length} chips.</p>
			<button onClick={handleClick}>Get Bag</button>
			{bags}
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default Chips;
