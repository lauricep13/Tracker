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
		accessor: 'name'
	},
	{
		Header: 'Name Verified',
		accessor: 'isNameVerified'
	},
	{
		Header: 'Cell Number',
		accessor: 'cellNumber'
	},
	{
		Header: 'Click2Call using Callrail',
		accessor: 'id'
	},
	{
		Header: 'Lead Status',
		accessor: 'leadStatus'
	},
	{
		Header: 'Communication Status',
		accessor: 'communicationstatus'
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

		this.onRowClick = this.onRowClick.bind(this);
	}

	onRowClick(state, rowInfo, column, instance) {
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
	}

	render() {
		if (this.state.toEdit) {
			return <Redirect to={'/Sellers/Edit/' + this.state.sellerId} />;
		}

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

export default SellersTable;
