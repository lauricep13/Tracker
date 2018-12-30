import React from 'react';
import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';

import dashboardRoutes from 'routes/Dashboard/Dashboard.js';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false
		};
	}
	componentDidUpdate(e) {
		if (e.history.location.pathname !== e.location.pathname) {
			this.refs.mainPanel.scrollTop = 0;
			if (this.state.mobileOpen) {
				this.setState({ mobileOpen: false });
			}
		}
	}

	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Header />
				<Sidebar
					routes={dashboardRoutes}
					logoText={'iTracker'}
					handleDrawerToggle={this.handleDrawerToggle}
					open={this.state.mobileOpen}
					color="blue"
					{...rest}
				/>
			</div>
		);
	}
}

export default Dashboard;
