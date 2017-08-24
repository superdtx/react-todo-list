import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
	applyMiddleware(thunk, createLogger)
)(createStore);

export default function configureStore (initialState = {todo: [], user: {}}) {
	return finalCreateStore(rootReducer, initialState);
}
