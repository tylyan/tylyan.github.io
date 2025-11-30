import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import RainbowIcon from "../components/common/RainbowIcon";
import INFO from "../data/user";
import "./styles/experienceSection.css";

const ExperienceItem = ({ experience, isExpanded, onToggle }) => {
	const hasBullets = experience.bullet_points?.length > 0;

	return (
		<div className="exp-item">
			<button
				className={`exp-row ${hasBullets ? "clickable" : ""}`}
				onClick={() => hasBullets && onToggle()}
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
				<>
					{experience.tech_stack?.length > 0 && (
						<p className="exp-tech">{experience.tech_stack.join(", ")}</p>
					)}
					<ul className="exp-bullets">
						{experience.bullet_points.map((bullet, i) => (
							<li key={i}>{bullet}</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

const ExperienceSection = () => {
	const expandableIndices = INFO.experience
		.map((exp, index) => (exp.bullet_points?.length > 0 ? index : null))
		.filter((index) => index !== null);

	const [expandedItems, setExpandedItems] = useState(new Set());

	const allExpanded = expandableIndices.every((index) => expandedItems.has(index));

	const toggleItem = (index) => {
		setExpandedItems((prev) => {
			const next = new Set(prev);
			if (next.has(index)) {
				next.delete(index);
			} else {
				next.add(index);
			}
			return next;
		});
	};

	const toggleAll = () => {
		if (allExpanded) {
			setExpandedItems(new Set());
		} else {
			setExpandedItems(new Set(expandableIndices));
		}
	};

	return (
		<section id="experience" className="section">
			<div className="section-header">
				<h2>Experience</h2>
				<button className="section-toggle" onClick={toggleAll}>
					<span className={`exp-toggle ${allExpanded ? "open" : ""}`}>
						<RainbowIcon>
							<ChevronDownIcon className="exp-chevron" />
						</RainbowIcon>
					</span>
				</button>
			</div>
			<div className="exp-list">
				{INFO.experience.map((exp, index) => (
					<ExperienceItem
						key={index}
						experience={exp}
						isExpanded={expandedItems.has(index)}
						onToggle={() => toggleItem(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default ExperienceSection;
