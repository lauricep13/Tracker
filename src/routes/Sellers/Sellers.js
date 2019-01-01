import Dashboard from '@material-ui/icons/Dashboard';

// Core component views
import SellerList from 'views/Sellers/SellerList.js';
import CreateSeller from 'views/Sellers/CreateSeller.js';
import EditSeller from 'views/Sellers/EditSeller.js';

const sellerRoutes = [
	{
		path: '/Sellers/Create',
		sidebarName: 'New Seller',
		icon: Dashboard,
		component: CreateSeller,
		exact: true
	},
	{
		path: '/Sellers',
		sidebarName: 'Leads',
		icon: Dashboard,
		component: SellerList,
		exact: true
	},
	{
		path: '/Sellers/Edit/:id',
		component: EditSeller
	}
];

export default sellerRoutes;
