import { combineReducers } from 'redux';
import sellers from 'reducers/sellerReducer.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	sellers,
	form: formReducer
});

export default rootReducer;
