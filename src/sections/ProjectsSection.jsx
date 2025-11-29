import React from "react";
import INFO from "../data/user";
import "./styles/projectsSection.css";

const ProjectsSection = () => {
	return (
		<section id="projects" className="section">
			<h2>Projects</h2>
			<div className="proj-list">
				{INFO.projects.map((project, index) => (
					<div key={index} className="proj-item">
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="proj-title"
						>
							{project.title}
						</a>
						<span className="proj-desc">{project.description}</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
