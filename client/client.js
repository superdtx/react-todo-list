import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

const initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purpose'
	}],
	user: {
		username: 'dtx',
		id: 13
	}
}

let store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
