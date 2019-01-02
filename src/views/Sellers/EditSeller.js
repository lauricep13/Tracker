import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'actions/sellerActions.js';
import _ from 'underscore';
import { Typography } from '@material-ui/core';

class EditSeller extends React.Component {
	componentDidMount() {
		if (this.props.id) this.props.actions.getSellerById(this.props.id);
	}

	render() {
		if (this.props.error) {
			return <div>Error! {this.props.message}</div>;
		}

		if (this.props.loading) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h2>Edit Seller</h2>
				<h6>{this.props.seller ? this.props.seller.name : 'undefined'}</h6>
				<h6>{this.props.id}</h6>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const { id } = ownProps.match.params;

	return {
		id: id,
		seller: state.sellers.payload,
		loading: state.sellers.loading,
		error: state.sellers.error
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
)(EditSeller);
