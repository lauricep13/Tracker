import * as types from 'actions/actionTypes.js';

export function createSeller(seller) {
	return { type: types.CREATE_SELLER, seller };
}
