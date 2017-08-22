import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
//take the component return new connected comp
import { connect } from 'react-redux';
//configure and create our store
//createStore(reducers, initialState)

class App extends Component {
	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<TodoInput dispatch={this.props.dispatch} />
				<TodoList todos={this.props.todos}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(App);