import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<Link to={link} className="article-card">
			<div className="article-content">
				<span className="article-date">{date}</span>
				<h3 className="article-title">{title}</h3>
				<p className="article-description">{description}</p>
			</div>
			<div className="article-arrow">
				<ArrowRightIcon className="article-arrow-icon" />
			</div>
		</Link>
	);
};

export default Article;
