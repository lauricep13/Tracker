import React from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { Button } from '@material-ui/core';

const columns = [
	{
		Header: 'id',
		accessor: 'id',
		show: true
	},
	{
		Header: 'Seller Name',
		accessor: 'name'
	},
	{
		Header: 'Name Verified',
		accessor: 'isNameVerified',
		Cell: row => (
			<span>
				<span
					style={{
						color: row.value === true ? '#57d500' : '#ffbf00'
					}}
				>
					&#x25cf;
				</span>{' '}
				{row.value === true ? 'Verified' : 'Not Verified'}
			</span>
		)
	},
	{
		Header: 'Cell Number',
		accessor: 'cellNumber'
	},
	{
		Header: 'Click 2 Call',
		accessor: 'cellNumber',
		Cell: row => (
			<Button color="primary" variant="contained" children={'Call'} />
		)
	},
	{
		Header: 'Lead Status',
		accessor: 'leadStatus'
	},
	{
		Header: 'Communication Status',
		accessor: 'communicationStatus'
	}
];

class SellersTable extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.onRowClick = this.onRowClick.bind(this);
	}

	onRowClick(state, rowInfo, column, instance) {
		return {
			onClick: (e, handleOriginal) => {
				const sellerData = rowInfo.original;
				if (handleOriginal) {
					handleOriginal();
				}
				debugger;
				// Sets the state to navigate to the edit page
				this.context.router.history.push('/Sellers/Edit/' + sellerData.id);
			}
		};
	}

	render() {
		const { sellers } = this.props;
		return (
			<ReactTable
				data={sellers}
				columns={columns}
				defaultPageSize={20}
				className="-striped -highlight"
				filterable={true}
				getTdProps={this.onRowClick}
			/>
		);
	}
}

SellersTable.contextTypes = {
	router: PropTypes.object
};

export default SellersTable;
