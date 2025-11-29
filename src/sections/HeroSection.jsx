import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMedal } from "@fortawesome/free-solid-svg-icons";
import INFO from "../data/user";
import "./styles/heroSection.css";

const HeroSection = () => {
	return (
		<section id="hero" className="hero">
			<h1 className="hero-name">{INFO.main.name}</h1>
			<p className="hero-title">{INFO.homepage.title}</p>
			<p className="hero-description">{INFO.homepage.description}</p>
			<div className="hero-links">
				<a href={INFO.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href={`mailto:${INFO.main.email}`} aria-label="Email">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				<span className="hero-note" title="Military Veteran">
					<FontAwesomeIcon icon={faMedal} />
				</span>
			</div>
		</section>
	);
};

export default HeroSection;
