import React from 'react';
import { TextField, FormControlLabel, Switch, Input } from '@material-ui/core';

// Core Components
import PhoneInput from 'components/Common/PhoneInput/PhoneInput.js';

class NewSellerInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			isNameVerified: false,
			email: '',
			cellNumber: '(  )    -    ',
			isCellVerified: false,
			isTextingOk: false,
			alternatePhoneNumber: '',
			bestTimeToCall: '',
			otherContacts: [],
			leadstatus: '',
			communicationStatus: ''
		};
	}

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
		console.log(this.state.cellNumber);
	};

	handleChecked = prop => event => {
		this.setState({ [prop]: event.target.checked });
	};

	render() {
		return (
			<form>
				<div>
					<TextField label="Seller Name" onChange={this.handleChange('name')} />

					<FormControlLabel
						control={
							<Switch
								checked={this.state.isNameVerified}
								onChange={this.handleChecked('isNameVerified')}
								value="isNameVerified"
							/>
						}
						label="Name Verified"
					/>
				</div>
				<div>
					<TextField label="Email" onChange={this.handleChange('email')} />
				</div>
				<div>
					<PhoneInput
						value={this.state.cellNumber}
						onChange={this.handleChange('cellNumber')}
					/>
				</div>
			</form>
		);
	}
}

export default NewSellerInput;
