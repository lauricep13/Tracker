import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import Footer from 'components/Footer/Footer.js';

import sellerRoutes from 'routes/Sellers/Sellers.js';

// material ui
import { withStyles } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3
	},
	toolbar: theme.mixins.toolbar
});

const switchRoutes = (
	<Switch>
		{sellerRoutes.map((prop, key) => {
			if (prop.redirect)
				return <Redirect from={prop.path} to={prop.to} key={key} />;
			return (
				<Route
					path={prop.path}
					component={prop.component}
					exact={prop.exact}
					key={key}
				/>
			);
		})}
	</Switch>
);

class Sellers extends React.Component {
	getRoute() {
		return this.props.location.pathname !== '/maps';
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Header />
				<Sidebar routes={sellerRoutes} />
				<main className={classes.content}>
					<div>
						<div className={classes.toolbar} />
						{switchRoutes}
					</div>
					<Footer />
				</main>
			</div>
		);
	}
}

export default withStyles(styles)(Sellers);
