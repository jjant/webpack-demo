import React from 'react';
import RedText from './RedText';

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

				<h3>This text is red</h3>
				<RedText>{this.state.text}</RedText>

				<img
					src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
					alt=""
				/>
			</div>
		);
	}
}

const reverseString = s =>
	s
		.split('')
		.reverse()
		.join('');
