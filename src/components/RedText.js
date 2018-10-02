import React from 'react';

export default class RedText extends React.Component {
	render() {
		return <p style={{ color: 'red', fontSize: 80 }}>{this.props.children}</p>;
	}
}
