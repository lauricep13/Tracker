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

// options
import BestTimeToCallTypes from 'data/Sellers/BestTimeToCallTypes.js';
import LeadStatusTypes from 'data/Sellers/LeadStatusTypes.js';
import CommunicationStatusTypes from 'data/Sellers/CommunicationStatusTypes.js';

const SellerForm = ({ handleSubmit, pristine, submitting }) => {
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
					options={BestTimeToCallTypes}
				/>
			</div>

			<div>
				<Field
					name="leadStatus"
					label="Lead Status"
					component={renderSelectField}
					options={LeadStatusTypes}
				/>
			</div>

			<div>
				<Field
					name="communicationStatus"
					label="Communication Status"
					component={renderSelectField}
					options={CommunicationStatusTypes}
				/>
			</div>

			<Button
				variant="contained"
				color="primary"
				type="submit"
				disabled={pristine || submitting}
			>
				Next
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
