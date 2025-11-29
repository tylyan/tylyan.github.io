import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	let { slug } = useParams();
	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords?.join(", ")} />
			</Helmet>

			<div className="page">
				<NavBar />
				<main>
					<Link to="/blog" className="back-link">← Back to Blog</Link>

					<article className="article-content">
						<header className="article-header">
							<time className="article-date">{article().date}</time>
							<h1 className="article-title">{article().title}</h1>
						</header>
						<div className="article-body">
							<ArticleStyle>{article().body}</ArticleStyle>
						</div>
					</article>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default ReadArticle;
