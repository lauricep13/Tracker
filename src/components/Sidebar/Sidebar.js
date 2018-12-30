import React from 'react';
import { NavLink } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Drawer } from '@material-ui/core';
// core components
const drawerWidth = 240;

const styles = theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	toolbar: theme.mixins.toolbar
});

const Sidebar = ({ ...props }) => {
	const { classes, routes } = props;

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<div className={classes.toolbar} />
			<List>
				{routes.map((route, index) => {
					if (!route.sidebarName) return null;

					return (
						<NavLink to={route.path} key={index}>
							<ListItem>
								<ListItemText primary={route.sidebarName} />
							</ListItem>
						</NavLink>
					);
				})}
			</List>
		</Drawer>
	);
};

export default withStyles(styles)(Sidebar);
