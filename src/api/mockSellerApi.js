import delay from 'api/delay';
import _ from 'underscore';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const sellers = [
	{
		id: 1,
		name: 'person 1',
		isNameVerified: false,
		email: 'person1@person.com',
		cellNumber: '(123) 456-7890',
		isCellVerified: false,
		isTextingOk: false,
		alternatePhoneNumber: '',
		bestTimeToCall: '',
		otherContacts: [],
		leadStatus: 'New Lead',
		communicationStatus: 'Following Up'
	},
	{
		id: 2,
		name: 'person 2',
		isNameVerified: true,
		email: 'person2@person.com',
		cellNumber: '(123) 456-7890',
		isCellVerified: true,
		isTextingOk: false,
		alternatePhoneNumber: '',
		bestTimeToCall: '',
		otherContacts: [],
		leadStatus: 'New Lead',
		communicationStatus: 'Following Up'
	},
	{
		id: 3,
		name: 'person 3',
		isNameVerified: false,
		email: 'person3@person.com',
		cellNumber: '(123) 456-7890',
		isCellVerified: false,
		isTextingOk: false,
		alternatePhoneNumber: '',
		bestTimeToCall: '',
		otherContacts: [],
		leadStatus: 'New Lead',
		communicationStatus: 'Following Up'
	}
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = seller => {
	return seller.name.toLowerCase();
};

class SellerApi {
	static getAllSellers() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], sellers));
			}, delay);
		});
	}

	static getById(Id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const seller = _.find(sellers, seller => {
					return seller.id == Id;
				});
				if (!_.isUndefined(seller)) {
					resolve(Object.assign({}, seller));
				} else {
					resolve(null);
				}
			}, delay);
		});
	}

	static saveSeller(seller) {
		seller = Object.assign({}, seller); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minSellerNameLength = 3;
				if (seller.name.length < minSellerNameLength) {
					reject(`Name must be at least ${minSellerNameLength} characters.`);
				}

				if (seller.id) {
					const existingSellerIndex = sellers.findIndex(a => a.id == seller.id);
					sellers.splice(existingSellerIndex, 1, seller);
				} else {
					//Just simulating creation here.
					//The server would generate ids for new sellers in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					seller.id = generateId(seller);
					sellers.push(seller);
				}

				resolve(seller);
			}, delay);
		});
	}

	static deleteSeller(sellerId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfSellerToDelete = sellers.findIndex(seller => {
					seller.id == sellerId;
				});
				sellers.splice(indexOfSellerToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default SellerApi;
