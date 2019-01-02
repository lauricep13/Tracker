import * as types from 'actions/sellerActions.js';
import initialState from 'reducers/initialState.js';

function isFailure(type) {
	return type.includes('FAILURE');
}

function isBegin(type) {
	return type.includes('BEGIN');
}

export default function sellerReducer(state = initialState.sellers, action) {
	if (isFailure(action.type))
		return {
			...state,
			loading: false,
			error: action.payload.error,
			payload: []
		};

	if (isBegin(action.type))
		return {
			...state,
			loading: true,
			error: null
		};

	switch (action.type) {
		case types.CREATE_SELLER_SUCCSESS:
			return {
				...state,
				loading: false,
				payload: action.payload
			};
		case types.LOAD_SELLERS_SUCCESS:
			return {
				...state,
				loading: false,
				payload: action.payload
			};
		case types.GET_SELLER_BY_ID_SUCCESS:
			return {
				...state,
				loading: false,
				payload: action.payload
			};
		default:
			// ALWAYS have a default case in a reducer
			return state;
	}
}
