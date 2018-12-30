import React from 'react';
import Header from 'layout/Header';
import Sidebar from './Sidebar/Sidebar';

import dashboardRoutes from 'routes/dashboard.jsx';

import image from 'assets/img/sidebar-2.jpg';
import logo from 'assets/img/reactlogo.png';

class App extends React.Component {
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
					logo={logo}
					image={image}
					handleDrawerToggle={this.handleDrawerToggle}
					open={this.state.mobileOpen}
					color="blue"
					{...rest}
				/>
			</div>
		);
	}
}

export default App;
