import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<>
			<Helmet>
				<title>{`Blog | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO?.description} />
				<meta name="keywords" content={currentSEO?.keywords?.join(", ")} />
			</Helmet>

			<div className="page">
				<NavBar />
				<main>
					<section className="hero">
						<h1 className="hero-name">Blog</h1>
						<p className="hero-description">{INFO.articles.description}</p>
					</section>

					<section className="section">
						<div className="articles-list">
							{myArticles.map((article, index) => (
								<div key={index} className="article-item">
									<Link to={`/blog/${index + 1}`} className="article-title">
										{article().title}
									</Link>
									<span className="article-date">{article().date}</span>
									<p className="article-desc">{article().description}</p>
								</div>
							))}
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Articles;
