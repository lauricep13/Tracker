import React from 'react';
import {
	AppBar,
	Toolbar,
	Button,
	withStyles,
	Typography
} from '@material-ui/core';

const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	}
});

function Header(props) {
	const { classes } = props;
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<div>
					<Button color="inherit" href="/Dashboard">
						<Typography variant="h6" color="inherit" noWrap>
							iTracker
						</Typography>
					</Button>
					<Button color="inherit" href="/Sellers">
						Sellers
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(Header);
