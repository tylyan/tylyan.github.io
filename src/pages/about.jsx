import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>
								<div className="subtitle about-subtitle">
									I've developed solutions for both large
									scale enterprises and start ups using the
									following technologies: Java (Kotlin, Guice,
									Spring), JavaScript (Node.js, TypeScript,
									React, Angular), Python (TensorFlow,
									scikit-learn), SQL (MySQL, PostgreSQL),
									NoSQL (AWS DynamoDB, MongoDB), AWS
									serverless stack, and Docker. I'm also
									familiar with RESTful microservices and
									owning the entire software development
									lifecycle.
									{/*
									Something about microservices
									Something about owning the whole software lifecycle
									*/}
								</div>
								<div className="subtitle about-subtitle">
									I'm passionate about learning, whether it be
									new technologies (I believe in using the
									right tool for the job) or other life
									skills. Right now, I'm currently learning
									Spanish and how to ride a motorcycle - I
									just recently earned my permit!
								</div>
								<div className="subtitle about-subtitle">
									On my free time, you'll find me playing
									beach volleyball, stand up paddleboarding,
									doing hot yoga, and snowboarding (
									<span style={{ fontStyle: "italic" }}>
										send it!
									</span>
									).
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
