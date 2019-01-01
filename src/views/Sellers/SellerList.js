import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'actions/sellerActions.js';

// Core components
import SellersTable from 'components/Sellers/SellersTable.js';

const SellersList = props => {
	return (
		<div>
			<h2>Sellers List</h2>
			<SellersTable sellers={props.sellers} />
		</div>
	);
};

function mapStateToProps(state, ownProps) {
	return {
		sellers: state.sellers
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(sellerActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SellersList);
