import React from "react";
import { useRainbowEffect } from "../../hooks/useRainbowEffect";

const RainbowIcon = ({ children, className = "" }) => {
	const rainbowRef = useRainbowEffect();

	return (
		<span ref={rainbowRef} className={`rainbow-icon ${className}`}>
			{children}
		</span>
	);
};

export default RainbowIcon;
