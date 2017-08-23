import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import createLogger from 'redux-logger';

const finalCreateStore = compose(
	applyMiddleware(createLogger)
)(createStore);

export default function configureStore (initialState = {todo: []}) {
	return finalCreateStore(rootReducer, initialState);
}
