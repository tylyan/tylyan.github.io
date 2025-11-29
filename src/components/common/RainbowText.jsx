import React from "react";
import { useRainbowEffect } from "../../hooks/useRainbowEffect";

const RainbowText = ({ children, as: Component = "span", className = "" }) => {
	const rainbowRef = useRainbowEffect();

	return (
		<Component
			ref={rainbowRef}
			className={`rainbow-text ${className}`}
			data-text={children}
		>
			{children}
		</Component>
	);
};

export default RainbowText;
