import React from "react";

import "./styles/experience.css";

const Experience = (props) => {
	const {
		title,
		company,
		location,
		start_date,
		end_date,
		description,
		bullet_points,
		// logo,
	} = props.experience;
	const isHomepage = props.isHomepage;

	return (
		<React.Fragment>
			<div className="experience">
				<div className="experience-container">
					{/* <div className="experience-logo">
						<img src={logo} alt="logo" />
					</div> */}
					<div className="experience-header">
						<div>
							<div className="experience-title">{title}</div>
							<div className="experience-company">{company}</div>
							{isHomepage && (
								<div className="experience-date">
									{start_date} - {end_date}
								</div>
							)}
						</div>
						{!isHomepage && (
							<div>
								<div className="experience-date">
									{start_date} - {end_date}
								</div>
								<div className="experience-location">
									{location}
								</div>
							</div>
						)}
					</div>
					<div className="experience-description">{description}</div>
					{!isHomepage && bullet_points.length > 0 && (
						<ul className="experience-description">
							{bullet_points.map((bullet_point, index) => (
								<li key={index}>{bullet_point}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
