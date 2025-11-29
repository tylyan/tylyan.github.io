import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./styles/navBar.css";

const NavBar = () => {
	return (
		<nav className="nav">
			<ThemeToggle />
		</nav>
	);
};

export default NavBar;
