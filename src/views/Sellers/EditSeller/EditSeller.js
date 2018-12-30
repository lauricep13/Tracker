import React from 'react';

const Dashboard = ({ match }) => {
	return (
		<div>
			<h2>Edit Seller</h2>
			<h6>{match.params.id}</h6>
		</div>
	);
};

export default Dashboard;
