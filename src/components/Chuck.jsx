import React, { Component } from 'react';
import chuckService from '../api/chuckService';

export default class Chuck extends Component {
	state = {
		fact: 'Getting data',
	};

	async componentDidMount() {
		let funfact = await chuckService.getJoke();
		console.log('funfact', funfact);
		this.setState({ fact: funfact });
	}

	render() {
		return (
			<div>
				<h1>Chuck fun fact</h1>

				<h2>{this.state.fact}</h2>
			</div>
		);
	}
}
