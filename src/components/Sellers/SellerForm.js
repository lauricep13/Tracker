import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

import {
	renderTextField,
	renderSwitchField,
	renderPhoneInput,
	renderSelectField
} from 'components/Common/InputRenderers.js';

function getBestTimeToCallOptions() {
	return ['Anytime', 'Morning', 'Afternoon', 'Evening'];
}

function getLeadStatusOptions() {
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

function getCommonunicationOptions() {
	return [
		'Following Up',
		'Left Message',
		'Reponse Recieved',
		'Contact Made',
		'Returning Caller'
	];
}

const SellerForm = props => {
	let { seller, handleSubmit, pristine, submitting } = props;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field name="name" component={renderTextField} label="Seller Name" />

				<Field
					name="isNameVerified"
					label="Name Verified"
					component={renderSwitchField}
				/>
			</div>
			<div>
				<Field
					label="Cell Number"
					name="cellNumber"
					component={renderPhoneInput}
				/>

				<Field
					name="isCellVerified"
					label="Cell Verified"
					component={renderSwitchField}
				/>

				<Field
					name="isTextingOk"
					label="Texting Ok"
					component={renderSwitchField}
				/>
			</div>
			<div>
				<Field name="email" label="Email" component={renderTextField} />
			</div>

			<div>
				<Field
					name="bestTimeToCall"
					label="Best time to call"
					component={renderSelectField}
					options={getBestTimeToCallOptions()}
				/>
			</div>

			<div>
				<Field
					name="leadStatus"
					label="Lead Status"
					component={renderSelectField}
					options={getLeadStatusOptions()}
				/>
			</div>

			<div>
				<Field
					name="communicationStatus"
					label="Communication Status"
					component={renderSelectField}
					options={getCommonunicationOptions()}
				/>
			</div>

			<Button type="submit" disabled={pristine || submitting}>
				Submit
			</Button>
		</form>
	);
};

SellerForm.propTypes = {
	seller: PropTypes.object.isRequired
};

// create new, "configured" function
const createReduxForm = reduxForm({
	form: 'SellerForm',
	destroyOnUnmount: false
});

// evaluate it for ContactForm component
export default createReduxForm(SellerForm);
