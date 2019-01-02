import sellerApi from 'api/mockSellerApi.js';

export const CREATE_SELLER_BEGIN = 'CREATE_SELLER_BEGIN';
export const CREATE_SELLER_FAILURE = 'CREATE_SELLER_FAILURE';
export const CREATE_SELLER_SUCCSESS = 'CREATE_SELLER_SUCCSESS';
export const LOAD_SELLERS_BEGIN = 'LOAD_SELLERS_BEGIN';
export const LOAD_SELLERS_FAILURE = 'LOAD_SELLERS_FAILURE';
export const LOAD_SELLERS_SUCCESS = 'LOAD_SELLERS_SUCCESS';
export const GET_SELLER_BY_ID_BEGIN = 'GET_SELLER_BY_ID_BEGIN';
export const GET_SELLER_BY_ID_SUCCESS = 'GET_SELLER_BY_ID_SUCCESS';
export const GET_SELLER_BY_ID_FAILURE = 'GET_SELLER_BY_ID_FAILURE';

export function createSellerBegin() {
	return { type: CREATE_SELLER_BEGIN };
}

export function createSellerFailure(error) {
	return { type: CREATE_SELLER_FAILURE, payload: error };
}

export function createSellerSuccess(seller) {
	return { type: CREATE_SELLER_SUCCSESS, payload: seller };
}

export function loadSellersBegin() {
	return { type: LOAD_SELLERS_BEGIN };
}

export function loadSellersFailure(error) {
	return { type: LOAD_SELLERS_FAILURE, payload: error };
}

export function loadSellersSuccess(sellers) {
	return { type: LOAD_SELLERS_SUCCESS, payload: sellers };
}

export function getSellerByIdBegin() {
	return { type: GET_SELLER_BY_ID_BEGIN };
}

export function getSellerByIdSuccess(seller) {
	return { type: GET_SELLER_BY_ID_SUCCESS, payload: seller };
}

export function getSellerByIdFailure(error) {
	return { type: GET_SELLER_BY_ID_FAILURE, payload: error };
}

export function createSeller(seller) {
	debugger;
	return function(dispatch) {
		dispatch(createSellerBegin());
		return sellerApi
			.saveSeller(seller)
			.then(sellers => {
				dispatch(createSellerSuccess(sellers));
			})
			.catch(error => {
				dispatch(createSellerFailure(error));
			});
	};
}

export function loadSellers() {
	return function(dispatch) {
		dispatch(loadSellersBegin());
		return sellerApi
			.getAllSellers()
			.then(sellers => {
				dispatch(loadSellersSuccess(sellers));
				return sellers;
			})
			.catch(error => {
				dispatch(loadSellersFailure(error));
			});
	};
}

export function getSellerById(Id) {
	return function(dispatch) {
		dispatch(getSellerByIdBegin());
		return sellerApi
			.getById(Id)
			.then(seller => {
				dispatch(getSellerByIdSuccess(seller));
			})
			.catch(error => {
				dispatch(getSellerByIdFailure(error));
			});
	};
}
