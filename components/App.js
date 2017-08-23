import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
//take the component return new connected comp
import { connect } from 'react-redux';
//configure and create our store
//createStore(reducers, initialState)
import actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import UserInfo from './UserInfo';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId}/>
				<TodoInput addTodo={this.props.actions.addTodo} />
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);