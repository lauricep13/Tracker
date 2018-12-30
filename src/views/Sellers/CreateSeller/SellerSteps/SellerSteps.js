import NewSellerInput from 'views/Sellers/CreateSeller/CreateSeller.js';

const NewSellerSteps = [
	{
		stepHeader: 'Seller Info',
		stepComponent: NewSellerInput
	},
	{
		stepHeader: 'Property Info',
		stepComponent: NewSellerInput
	},
	{
		stepHeader: 'Something else',
		stepComponent: NewSellerInput
	}
];

export default NewSellerSteps;
