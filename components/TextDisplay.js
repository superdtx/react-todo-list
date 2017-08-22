import React, { Component } from 'react';

class TextDisplay extends Component {

	handleClick(){
		this.props.deleteLetter()
	}

	render() {
		return (
			<div>
				<div>I am going to display text {this.props.text}</div>
				<button onClick={this.handleClick.bind(this)}>delete one letter</button>
			</div>
		)
	}
}

export default TextDisplay;