import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import HeroSection from "../sections/HeroSection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/portfolio.css";

const Portfolio = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			const el = document.getElementById(id);
			if (el) {
				setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
			}
		}
	}, [location.hash]);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO?.description} />
				<meta name="keywords" content={currentSEO?.keywords?.join(", ")} />
			</Helmet>

			<div className="page">
				<NavBar />
				<main>
					<HeroSection />
					<ExperienceSection />
					<EducationSection />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Portfolio;
