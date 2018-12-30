import * as types from 'actions/actionTypes.js';

export default function sellerReducer(state = [], action) {
	switch (action.type) {
		case types.CREATE_SELLER:
			return [...state, Object.assign({}, action.seller)];

		default:
			return state;
	}
}
