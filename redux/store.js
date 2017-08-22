import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import createLogger from 'redux-logger';

const finalCreateStore = compose(
	applyMiddleware(createLogger)
)(createStore);

export default function configureStore (initialState = {todo: []}) {
	return finalCreateStore(reducer, initialState);
}
