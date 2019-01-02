import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'actions/sellerActions.js';
import _ from 'underscore';

// Core components
import SellersTable from 'components/Sellers/SellersTable.js';

class SellersList extends React.Component {
	componentDidMount() {
		if (!this.props.sellers || !_.isArray(this.props.sellers))
			this.props.actions.loadSellers();
	}

	render() {
		const { error, loading, sellers } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading || !_.isArray(sellers)) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h2>Sellers List</h2>
				<SellersTable sellers={sellers} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	debugger;
	return {
		sellers: state.sellers.payload,
		loading: state.sellers.loading,
		error: state.sellers.error
	};
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(sellerActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SellersList);
