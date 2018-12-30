import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import Footer from 'components/Footer/Footer.js';

import dashboardRoutes from 'routes/Dashboard/Dashboard.js';

const switchRoutes = (
	<Switch>
		{dashboardRoutes.map((prop, key) => {
			if (prop.redirect)
				return <Redirect from={prop.path} to={prop.to} key={key} />;
			return <Route path={prop.path} component={prop.component} key={key} />;
		})}
	</Switch>
);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false
		};
	}
	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};
	getRoute() {
		return this.props.location.pathname !== '/maps';
	}
	resizeFunction() {
		if (window.innerWidth >= 960) {
			this.setState({ mobileOpen: false });
		}
	}
	componentDidUpdate(e) {
		if (e.history.location.pathname !== e.location.pathname) {
			this.refs.mainPanel.scrollTop = 0;
			if (this.state.mobileOpen) {
				this.setState({ mobileOpen: false });
			}
		}
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeFunction);
	}
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Sidebar
					routes={dashboardRoutes}
					logoText={'iTracker'}
					handleDrawerToggle={this.handleDrawerToggle}
					open={this.state.mobileOpen}
					color="blue"
					{...rest}
				/>
				<div ref="mainPanel">
					<Header
						routes={dashboardRoutes}
						handleDrawerToggle={this.handleDrawerToggle}
						{...rest}
					/>
					{/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
					{this.getRoute() ? (
						<div>
							<div>{switchRoutes}</div>
						</div>
					) : (
						<div className={classes.map}>{switchRoutes}</div>
					)}
					{this.getRoute() ? <Footer /> : null}
				</div>
			</div>
		);
	}
}

export default App;
