import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/soda">
				Soda
			</NavLink>
			<NavLink exact to="/chips">
				Chips
			</NavLink>
			<NavLink exact to="/sardines">
				Sardines
			</NavLink>
		</nav>
	);
};

export default Navbar;
