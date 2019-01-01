import React from 'react';
import { PropTypes } from 'prop-types';
import { TextField } from '@material-ui/core';

// Core Components
import PhoneInput from 'components/Common/PhoneInput.js';
import SwitchWithLabel from 'components/Common/SwitchWithLabel.js';
import SelectWithLabel from 'components/Common/SelectWithLabel.js';

class SellerForm extends React.Component {
	getBestTimeToCallOptions() {
		return ['Anytime', 'Morning', 'Afternoon', 'Evening'];
	}

	getLeadStatusOptions() {
		return [
			'New Lead',
			'Due Diligence',
			'Contact Made',
			'Following Up',
			'Follow up Stopped',
			'Appointment Scheduled',
			'Waiting on seller response',
			'Moved to offer',
			'Under Contract',
			'Sold',
			'Non-responsive',
			'Referred Out',
			'Dead Deal'
		];
	}

	getCommonunicationOptions() {
		return [
			'Following Up',
			'Left Message',
			'Reponse Recieved',
			'Contact Made',
			'Returning Caller'
		];
	}

	render() {
		let { seller, onChange } = this.props;

		return (
			<form>
				<div>
					<TextField
						label="Seller Name"
						value={seller.name}
						name="name"
						onChange={onChange}
					/>

					<SwitchWithLabel
						onChange={onChange}
						name="isNameVerified"
						value={seller.isNameVerified}
						label="Name Verified"
					/>
				</div>
				<PhoneInput
					label="Cell Number"
					name="cellNumber"
					value={seller.cellNumber}
					onChange={onChange}
				/>

				<SwitchWithLabel
					onChange={onChange}
					name="isCellVerified"
					value={seller.isCellVerified}
					label="Cell Verified"
				/>

				<SwitchWithLabel
					onChange={onChange}
					name="isTextingOk"
					value={seller.isTextingOk}
					label="Texting Ok"
				/>

				<div>
					<TextField name="email" label="Email" onChange={onChange} />
				</div>

				<div>
					<SelectWithLabel
						displayEmpty
						value={seller.bestTimeToCall}
						onChange={onChange}
						name="bestTimeToCall"
						placeHolder="Best time to call"
						options={this.getBestTimeToCallOptions()}
						id="bestTimeToCall"
					/>
				</div>

				<div>
					<SelectWithLabel
						displayEmpty
						value={seller.leadstatus}
						onChange={onChange}
						name="leadstatus"
						placeHolder="Lead Status"
						options={this.getLeadStatusOptions()}
						id="leadstatus"
					/>
				</div>

				<div>
					<SelectWithLabel
						displayEmpty
						value={seller.communicationStatus}
						onChange={onChange}
						name="communicationStatus"
						placeHolder="Communication Status"
						options={this.getCommonunicationOptions()}
						id="communicationStatus"
					/>
				</div>
			</form>
		);
	}
}

SellerForm.propTypes = {
	onChange: PropTypes.func.isRequired,
	seller: PropTypes.object.isRequired
};

export default SellerForm;
