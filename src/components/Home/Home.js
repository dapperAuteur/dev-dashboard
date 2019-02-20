import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Welcome to Cool Couches</h1>
			<h2>Wanna see something cool?</h2>
			<Link to="/cool-couches">Click me🕴</Link>
		</div>
	);
};

export default Home;
