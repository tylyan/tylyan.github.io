import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Portfolio from "./pages/Portfolio";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Portfolio />} />
				<Route path="/blog" element={<Articles />} />
				<Route path="/blog/:slug" element={<ReadArticle />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
