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
		margin: theme.spacing.unit,
		minWidth: 200
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	}
});

function SelectWithLabel(props) {
	const {
		value,
		onChange,
		name,
		placeHolder,
		options,
		label,
		id,
		classes
	} = props;
	return (
		<FormControl className={classes.formControl}>
			<InputLabel htmlFor={id}>{placeHolder}</InputLabel>
			<Select
				value={value}
				onChange={onChange}
				name={name}
				inputProps={{
					id: { id }
				}}
			>
				<MenuItem value="" disabled>
					{placeHolder}
				</MenuItem>

				{options.map(option => {
					return <MenuItem value={option}>{option}</MenuItem>;
				})}
			</Select>
		</FormControl>
	);
}

export default withStyles(styles)(SelectWithLabel);
