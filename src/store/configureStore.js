import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/index.js';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}, history) {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

	return store;
}
