import React, { Component } from 'react';
import axios from 'axios'

class Couches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			couches: []
		}
	}

	componentDidMount() {
		axios.get('/api/couches').then(response => {
			this.setState({ couches: response.data })
		})
	}

	render() {
		const couches = this.state.couches.map(couch => {
			return <div key={couch.id}>
				<h1>{couch.name}</h1>
				<img src={couch.image} alt="" />
				<p>{couch.price}</p>
			</div>
		})
		return (
			<div>
				<h1>Couches</h1>
				{couches}
			</div>
		);
	}
}

export default Couches;