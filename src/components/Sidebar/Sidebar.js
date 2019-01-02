import React from 'react';
import { NavLink } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Drawer } from '@material-ui/core';

import classNames from 'classnames';
import sideBarStyles from './Sidebar.jsx';
import { PropTypes } from 'prop-types';

const Sidebar = (props, context) => {
	const { classes, routes } = props;
	const color = 'blue';
	function activeRoute(routeName) {
		return context.router.route.location.pathname === routeName;
	}

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<div className={classes.toolbar} />
			<List className={classes.list}>
				{routes.map((route, index) => {
					if (!route.sidebarName) return null;

					var listItemClasses = classNames({
						[' ' + classes[color]]: activeRoute(route.path)
					});

					const whiteFontClasses = classNames({
						[' ' + classes.whiteFont]: activeRoute(route.path)
					});

					debugger;

					return (
						<NavLink
							className={classes.item}
							activeClassName="active"
							to={route.path}
							key={index}
						>
							<ListItem button className={classes.itemLink + listItemClasses}>
								<ListItemText
									primary={route.sidebarName}
									className={classes.itemText + whiteFontClasses}
									disableTypography={true}
								/>
							</ListItem>
						</NavLink>
					);
				})}
			</List>

			<div className={classes.background} />
		</Drawer>
	);
};

Sidebar.contextTypes = {
	router: PropTypes.object
};

export default withStyles(sideBarStyles)(Sidebar);
