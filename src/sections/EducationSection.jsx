import React from "react";
import INFO from "../data/user";
import "./styles/educationSection.css";

const EducationSection = () => {
	return (
		<section id="education" className="section">
			<h2>Education</h2>
			<div className="edu-list">
				{INFO.education.map((edu, index) => (
					<div key={index} className="edu-item">
						<div className="edu-degree">{edu.degree}</div>
						<div className="edu-meta">
							{edu.school} · {edu.grad_date}
							{edu.description && <span> · {edu.description}</span>}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default EducationSection;
