import React from 'react';
import PropTypes from 'prop-types';

// Material ui
import { FormControlLabel, Switch } from '@material-ui/core';

export default function SwitchWithLabel(props) {
	const { value, name, onChange, label } = props;
	return (
		<FormControlLabel
			control={<Switch onChange={onChange} name={name} value={value} />}
			label={label}
		/>
	);
}

SwitchWithLabel.propTypes = {
	value: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};
