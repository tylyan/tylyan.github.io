import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import RainbowIcon from "../components/common/RainbowIcon";
import INFO from "../data/user";
import "./styles/experienceSection.css";

const ExperienceItem = ({ experience, defaultExpanded = false }) => {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);
	const hasBullets = experience.bullet_points?.length > 0;

	return (
		<div className="exp-item">
			<button
				className={`exp-row ${hasBullets ? "clickable" : ""}`}
				onClick={() => hasBullets && setIsExpanded(!isExpanded)}
				disabled={!hasBullets}
			>
				<span className="exp-company">{experience.company}</span>
				<span className="exp-title">{experience.title}</span>
				<span className="exp-date">{experience.start_date} – {experience.end_date}</span>
				{hasBullets && (
					<span className={`exp-toggle ${isExpanded ? "open" : ""}`}>
						<RainbowIcon>
							<ChevronDownIcon className="exp-chevron" />
						</RainbowIcon>
					</span>
				)}
			</button>
			{hasBullets && isExpanded && (
				<ul className="exp-bullets">
					{experience.bullet_points.map((bullet, i) => (
						<li key={i}>{bullet}</li>
					))}
				</ul>
			)}
		</div>
	);
};

const ExperienceSection = () => {
	return (
		<section id="experience" className="section">
			<h2>Experience</h2>
			<div className="exp-list">
				{INFO.experience.map((exp, index) => (
					<ExperienceItem key={index} experience={exp} defaultExpanded={true} />
				))}
			</div>
		</section>
	);
};

export default ExperienceSection;
