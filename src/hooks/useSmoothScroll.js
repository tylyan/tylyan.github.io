import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSmoothScroll = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const isOnPortfolio = location.pathname === "/";

	const scrollToSection = useCallback(
		(sectionId) => {
			if (isOnPortfolio) {
				const element = document.getElementById(sectionId);
				if (element) {
					const navHeight = 60;
					const elementPosition = element.getBoundingClientRect().top;
					const offsetPosition =
						elementPosition + window.pageYOffset - navHeight;

					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					});
				}
			} else {
				navigate(`/#${sectionId}`);
			}
		},
		[isOnPortfolio, navigate]
	);

	return { scrollToSection, isOnPortfolio };
};
