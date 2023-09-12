import React from "react";

import INFO from "../../data/user";

import "./styles/allExperience.css";
import Experience from "./experience";

const AllExperience = ({ isHomepage }) => {
	return (
		<div className="all-experience-container">
			{INFO.experience.map((experience, index) => (
				<div
					className={`all-experience-experience ${
						isHomepage ? "homepage" : ""
					}`}
					key={index}
				>
					<Experience
						isHomepage={isHomepage}
						experience={experience}
					/>
				</div>
			))}
		</div>
	);
};

export default AllExperience;
