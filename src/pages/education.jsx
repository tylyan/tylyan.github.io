import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/education.css";

const Edu = (props) => {
	const { degree, school, location, grad_date, description } =
		props.education;

	const isHomepage = props.isHomepage;

	return (
		<React.Fragment>
			<div className="education">
				<div className="education-container">
					{/* <div className="education-logo">
						<img src={logo} alt="logo" />
					</div> */}
					<div className="education-header">
						<div>
							<div className="education-degree">{degree}</div>
							<div className="education-school">{school}</div>
						</div>
						{!isHomepage && (
							<div>
								<div className="education-date">
									{grad_date}
								</div>
								<div className="education-location">
									{location}
								</div>
							</div>
						)}
					</div>
					<div className="education-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const AllEducation = ({ isHomepage }) => {
	return (
		<div className="all-education-container">
			{INFO.education.map((edu, index) => (
				<div
					className={`all-education-education ${
						isHomepage ? "homepage" : ""
					}`}
					key={index}
				>
					<Edu isHomepage={isHomepage} education={edu} />
				</div>
			))}
		</div>
	);
};

const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "education");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Education | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="education" />
				<div className="content-wrapper">
					<div className="education-logo-container">
						<div className="education-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="education-page-container">
						<div className="title education-title">Education</div>

						{/* <div className="subtitle projects-subtitle">
							Education
						</div> */}

						<div className="education-list">
							<AllEducation />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export { Education, AllEducation };
