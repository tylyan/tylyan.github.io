import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import RainbowIcon from "./RainbowIcon";
import "./styles/themeToggle.css";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className="theme-toggle"
			onClick={toggleTheme}
			aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
		>
			<RainbowIcon>
				<FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
			</RainbowIcon>
		</button>
	);
};

export default ThemeToggle;
