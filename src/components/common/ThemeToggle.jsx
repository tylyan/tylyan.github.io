import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
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
				{theme === "light" ? <MoonIcon /> : <SunIcon />}
			</RainbowIcon>
		</button>
	);
};

export default ThemeToggle;
