import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from 'store/configureStore.js';
import { Provider } from 'react-redux';

// core components
import { loadSellers } from 'actions/sellerActions.js';

import indexRoutes from 'routes/index.jsx';

const hist = createBrowserHistory();
const initialState = {};
const store = configureStore(initialState);

store.dispatch(loadSellers());

ReactDOM.render(
	<Provider store={store}>
		<Router history={hist}>
			<Switch>
				{indexRoutes.map((prop, key) => {
					return (
						<Route
							path={prop.path}
							exact={prop.exact}
							component={prop.component}
							key={key}
						/>
					);
				})}
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
