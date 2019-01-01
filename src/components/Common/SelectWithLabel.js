import React from 'react';
// Material ui
import {
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	withStyles
} from '@material-ui/core';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		minWidth: 200
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	}
});

function SelectWithLabel({
	name,
	options,
	id,
	classes,
	input,
	label,
	meta: { touched, error },
	...custom
}) {
	return (
		<FormControl className={classes.formControl} error={touched && error}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<Select
				native
				{...input}
				{...custom}
				inputProps={{
					name: { name },
					id: { id }
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
		</FormControl>
	);
}

export default withStyles(styles)(SelectWithLabel);
