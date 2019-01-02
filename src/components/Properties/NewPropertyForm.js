import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

import { renderTextField } from 'components/Common/InputRenderers.js';

const NewPropertyForm = ({ seller, handleSubmit, pristine, submitting }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field
					name="address"
					component={renderTextField}
					label="Property Address"
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

NewPropertyForm.propTypes = {
	seller: PropTypes.object.isRequired
};

// create new, "configured" function
const createReduxForm = reduxForm({
	form: 'NewPropertyForm',
	destroyOnUnmount: false
});

// evaluate it for ContactForm component
export default createReduxForm(NewPropertyForm);
