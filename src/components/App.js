import React from 'react';
// import RedText from './RedText';

export default class App extends React.Component {
	state = {
		text: 'Hello world!'
	};

	handleChange = newText => {
		this.setState({ text: newText.target.value });
	};

	render() {
		return (
			<div>
				<h1>Type something!</h1>
				<input
					type="text"
					onChange={this.handleChange}
					value={this.state.text}
				/>

				<br />
				<br />

				<h3>This text is reversed</h3>
				<p>{reverseString(this.state.text)}</p>

				<h3>This text is normal</h3>
				<p>{this.state.text}</p>
				<span />
			</div>
		);
	}
}

const reverseString = s =>
	s
		.split('')
		.reverse()
		.join('');
