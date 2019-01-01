import * as types from 'actions/actionTypes.js';
import sellerApi from 'api/mockSellerApi.js';
import _ from 'underscore';

export function createSellerSuccess(seller) {
	return { type: types.CREATE_SELLER_SUCCSESS, seller };
}

export function loadSellersSuccess(sellers) {
	return { type: types.LOAD_SELLERS_SUCCESS, sellers };
}

export function getSellerByIdSuccess(seller) {
	return { type: types.GET_SELLER_BY_ID_SUCCESS, seller };
}

export function getSellerByIdFailure(Id) {
	return { type: types.GET_SELLER_BY_ID_FAILURE, Id };
}

export function createSeller(seller) {
	return function(dispatch) {
		return sellerApi
			.saveSeller(seller)
			.then(sellers => {
				dispatch(createSellerSuccess(sellers));
			})
			.catch(error => {
				throw error;
			});
	};
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

export function getSellerById(Id) {
	return function(dispatch) {
		return sellerApi
			.getById(Id)
			.then(seller => {
				if (!_.isUndefined(seller)) {
					dispatch(getSellerByIdSuccess(seller));
				} else {
					dispatch(getSellerByIdFailure(Id));
				}
			})
			.catch(error => {
				throw error;
			});
	};
}
