import React from "react";
import INFO from "../../data/user";
import "./styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<span>© {new Date().getFullYear()} {INFO.main.name}</span>
			<span className="footer-separator">·</span>
			<span>Military Veteran</span>
		</footer>
	);
};

export default Footer;
