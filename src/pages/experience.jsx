import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllExperience from "../components/experience/allExperience";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experience");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="experience-page-container">
						<div className="title experience-title">Experience</div>

						<div className="subtitle experience-subtitle">
							I've had the pleasure of working with a variety of
							companies, building solutions in both the front and
							back end. I enjoy building solutions on the cloud
							and incorporate a security-first approach in
							software design due to my strong cybersecurity
							background.
						</div>
						<div className="experience-list">
							<AllExperience />
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

export default Experience;
