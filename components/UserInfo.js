import React, { Component } from 'react';

class UserInfo extends Component {

	handleNewId(){
		//dispatch action
		this.props.actions.createNewUserId();
	}

	handleNewIdIfOdd(){
		//dispatch action
		this.props.actions.createNewUserIdIfOdd();
	}

	handleNewIdAsync(){
		this.props.actions.createNewUserIdAsync();
	}

	render() {
		return (
			<li>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>Update Async</button>
			</li>
		)
	}
}

export default UserInfo;