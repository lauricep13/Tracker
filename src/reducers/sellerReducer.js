import * as types from 'actions/actionTypes.js';
import initialState from 'reducers/initialState.js';

export default function sellerReducer(state = initialState.sellers, action) {
	switch (action.type) {
		case types.CREATE_SELLER_SUCCSESS:
			return [...state, Object.assign({}, action.seller)];
		case types.LOAD_SELLERS_SUCCESS:
			return action.sellers;
		case types.GET_SELLER_BY_ID_SUCCESS:
			return action.seller;
		case types.GET_SELLER_BY_ID_FAILURE:
			return action.Id;
		default:
			return state;
	}
}
