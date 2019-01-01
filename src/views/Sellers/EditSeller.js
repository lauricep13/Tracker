import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'actions/sellerActions.js';
import _ from 'underscore';
import { Typography } from '@material-ui/core';

class EditSeller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id
		};
	}

	render() {
		if (_.isUndefined(this.props.seller))
			return <Typography variant="display1" children="Seller does not exist" />;

		return (
			<div>
				<h2>Edit Seller</h2>
				<h6>{this.props.seller ? this.props.seller.name : 'undefined'}</h6>
				<h6>{this.state.id}</h6>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const { id } = ownProps.match.params;
	const seller = _.find(state.sellers, seller => seller.id == id);

	return {
		seller: seller
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
