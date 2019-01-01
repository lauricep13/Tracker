import { withStyles } from '@material-ui/styles';
import { PropTypes } from 'prop-types';
import React from 'react';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
	root: {
		display: 'flex',
		alignItems: 'center'
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative'
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700]
		}
	},
	fabProgress: {
		color: green[500],
		position: 'absolute',
		top: -6,
		left: -6,
		zIndex: 1
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12
	}
});

function SaveButton(props) {
	const { classes } = props;
	const { saving, onSave } = props;
	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				disabled={saving}
				onClick={onSave}
			>
				{saving ? 'Saving...' : 'Save'}
			</Button>
		</div>
	);
}

SaveButton.propTypes = {
	saving: PropTypes.bool.isRequired,
	success: PropTypes.bool.isRequired,
	onSave: PropTypes.func.isRequired
};

export default withStyles()(SaveButton);
