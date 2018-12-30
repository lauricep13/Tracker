import { combineReducers } from 'redux';
import sellers from 'reducers/sellerReducer.js';

const rootReducer = combineReducers({
	sellers
});

export default rootReducer;
