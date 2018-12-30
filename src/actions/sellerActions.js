import * as types from 'actions/actionTypes.js';
import sellerApi from 'api/mockSellerApi.js';

export function createSeller(seller) {
	return { type: types.CREATE_SELLER, seller };
}

export function loadSellersSuccess(sellers) {
	return { type: types.LOAD_SELLERS_SUCCESS, sellers };
}

export function loadSellers() {
	return function(dispatch) {
		return sellerApi
			.getAllSellers()
			.then(sellers => {
				dispatch(loadSellersSuccess(sellers));
			})
			.catch(error => {
				throw error;
			});
	};
}
