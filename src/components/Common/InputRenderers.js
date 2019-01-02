import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Switch, MenuItem, Input } from '@material-ui/core';

import { PhoneMask } from 'components/Common/InputMasks.js';

export const renderTextField = ({
	label,
	input,
	meta: { touched, invalid, error },
	...custom
}) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
);

export const renderCheckbox = ({ input, label }) => (
	<div>
		<FormControlLabel
			control={
				<Checkbox
					checked={input.value ? true : false}
					onChange={input.onChange}
				/>
			}
			label={label}
		/>
	</div>
);

export const renderSwitchField = ({
	input,
	label,
	name,
	meta: { touched, error },
	children,
	...custom
}) => (
	<FormControl error={touched && error}>
		<FormControlLabel
			control={<Switch name={name} {...input} {...custom} />}
			label={label}
		/>
		{renderFromHelper({ touched, error })}
	</FormControl>
);

export const renderPhoneInput = ({
	input,
	label,
	name,
	meta: { touched, error },
	...custom
}) => (
	<FormControl error={touched && error}>
		<InputLabel>{label}</InputLabel>
		<Input name={name} inputComponent={PhoneMask} {...input} {...custom} />
		{renderFromHelper({ touched, error })}
	</FormControl>
);

export const radioButton = ({ input, ...rest }) => (
	<FormControl>
		<RadioGroup {...input} {...rest}>
			<FormControlLabel value="female" control={<Radio />} label="Female" />
			<FormControlLabel value="male" control={<Radio />} label="Male" />
		</RadioGroup>
	</FormControl>
);

const renderFromHelper = ({ touched, error }) => {
	if (!(touched && error)) {
		return;
	} else {
		return <FormHelperText>{touched && error}</FormHelperText>;
	}
};

export const renderSelectField = ({
	name,
	input,
	label,
	meta: { touched, error },
	options,
	...custom
}) => (
	<FormControl error={touched && error}>
		<InputLabel>{label}</InputLabel>
		<Select
			style={{ minWidth: 200 }}
			{...input}
			{...custom}
			inputProps={{
				name: { name }
			}}
		>
			<MenuItem value="" disabled>
				{label}
			</MenuItem>

			{options.map((option, index) => {
				return (
					<MenuItem key={index} value={option}>
						{option}
					</MenuItem>
				);
			})}
		</Select>
		{renderFromHelper({ touched, error })}
	</FormControl>
);
