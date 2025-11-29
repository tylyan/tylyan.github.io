import React from "react";
import "./styles/sectionWrapper.css";

const SectionWrapper = ({ id, children, className = "", alternate = false }) => {
	return (
		<section
			id={id}
			className={`section ${alternate ? "section-alt" : ""} ${className}`}
		>
			<div className="section-container">{children}</div>
		</section>
	);
};

export default SectionWrapper;
