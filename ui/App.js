import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import router from "./router";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	// login = () => {

	// };

	render() {
		return (
			<div className="App">
				<NavBar />
				{router}
			</div>
		);
	}
}

export default App;
