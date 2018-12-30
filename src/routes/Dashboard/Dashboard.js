import Dashboard from '@material-ui/icons/Dashboard';

// Core component views
import DashboardView from 'views/Dashboard/dashboard.js';

const dashboardRoutes = [
	{
		path: '/Dashboard',
		sidebarName: 'Dashboard',
		navbarName: 'Dashbaord',
		icon: Dashboard,
		component: DashboardView
	},
	{ redirect: true, path: '/', to: '/Dashboard', navbarName: 'Redirect' }
];

export default dashboardRoutes;
