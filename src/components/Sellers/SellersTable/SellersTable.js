import React from 'react';
import { Redirect } from 'react-router-dom';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
	{
		Header: 'id',
		accessor: 'id',
		show: true
	},
	{
		Header: 'Seller Name',
		accessor: 'Name'
	},
	{
		Header: 'Name Verified',
		accessor: 'IsNameVerified'
	},
	{
		Header: 'Cell Number',
		accessor: 'CellNumber'
	},
	{
		Header: 'Click2Call using Callrail',
		accessor: 'id'
	},
	{
		Header: 'Lead Status',
		accessor: 'LeadStatus'
	},
	{
		Header: 'Communication Status',
		accessor: 'Communicationstatus'
	},
	{
		Header: 'Make Offer',
		accessor: 'id'
	},
	{
		Header: 'Property Link',
		accessor: 'id'
	}
];

class SellersTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toEdit: false
		};
	}

	render() {
		if (this.state.toEdit) {
			return <Redirect to={'/Sellers/Edit/' + this.state.sellerId} />;
		}
		return (
			<ReactTable
				data={this.props.data}
				columns={columns}
				defaultPageSize={20}
				className="-striped -highlight"
				filterable={true}
				getTdProps={(state, rowInfo, column, instance) => {
					return {
						onClick: (e, handleOriginal) => {
							const sellerData = rowInfo.original;

							if (handleOriginal) {
								handleOriginal();
							}

							// Sets the state to navigate to the edit page
							this.setState(() => ({
								toEdit: true,
								sellerId: sellerData.id
							}));
						}
					};
				}}
			/>
		);
	}
}

export default SellersTable;
