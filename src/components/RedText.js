import React from 'react';

export default class RedText extends React.Component {
	render() {
		return <p style={{ color: 'red' }}>{this.props.children}</p>;
	}
}
