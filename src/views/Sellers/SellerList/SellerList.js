import React, { Component } from 'react';

import { makeData } from 'views/Sellers/Utils.js';

// Core components
import SellersTable from 'components/Sellers/SellersTable/SellersTable.js';

class SellersList extends Component {
	constructor() {
		super();
		this.state = {
			data: makeData()
		};
	}

	render() {
		return (
			<div>
				<h2>Sellers List</h2>
				<SellersTable data={this.state.data} />
			</div>
		);
	}
}

export default SellersList;
