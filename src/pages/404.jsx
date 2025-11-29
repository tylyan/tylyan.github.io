import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	return (
		<>
			<Helmet>
				<title>{`404 | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page">
				<NavBar />
				<main className="notfound">
					<h1>404</h1>
					<p>Page not found.</p>
					<Link to="/">← Back to home</Link>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Notfound;
