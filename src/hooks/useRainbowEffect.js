import { useEffect, useRef, useCallback } from "react";

const ACTIVATION_RADIUS = 150;
const MAX_INTENSITY = 0.85;

export const useRainbowEffect = () => {
	const elementRef = useRef(null);
	const animationFrameRef = useRef(null);

	const updateEffect = useCallback((mouseX, mouseY) => {
		const element = elementRef.current;
		if (!element) return;

		const rect = element.getBoundingClientRect();
		const elementCenterX = rect.left + rect.width / 2;
		const elementCenterY = rect.top + rect.height / 2;

		// Calculate distance from mouse to element center
		const distanceX = mouseX - elementCenterX;
		const distanceY = mouseY - elementCenterY;
		const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

		// Calculate intensity based on distance (1 at center, 0 at edge of radius)
		const intensity = Math.max(0, 1 - distance / ACTIVATION_RADIUS) * MAX_INTENSITY;

		// Calculate gradient position based on mouse position relative to element
		const relativeX = ((mouseX - rect.left) / rect.width) * 100;
		const relativeY = ((mouseY - rect.top) / rect.height) * 100;

		// Clamp values for smoother effect
		const gradientX = Math.max(0, Math.min(100, relativeX));
		const gradientY = Math.max(0, Math.min(100, relativeY));

		element.style.setProperty("--rainbow-intensity", intensity.toFixed(3));
		element.style.setProperty("--rainbow-x", `${gradientX}%`);
		element.style.setProperty("--rainbow-y", `${gradientY}%`);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
			animationFrameRef.current = requestAnimationFrame(() => {
				updateEffect(e.clientX, e.clientY);
			});
		};

		const handleMouseLeave = () => {
			const element = elementRef.current;
			if (element) {
				element.style.setProperty("--rainbow-intensity", "0");
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [updateEffect]);

	return elementRef;
};

export default useRainbowEffect;
