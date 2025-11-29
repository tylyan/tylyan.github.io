import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</Link>
	);
};

export default Article;
