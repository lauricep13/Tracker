import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing.unit
	}
});

function TextMaskCustom(props) {
	const { inputRef, ...other } = props;

	return (
		<MaskedInput
			{...other}
			ref={ref => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[
				'(',
				/[1-9]/,
				/\d/,
				/\d/,
				')',
				' ',
				/\d/,
				/\d/,
				/\d/,
				'-',
				/\d/,
				/\d/,
				/\d/,
				/\d/
			]}
			placeholderChar={'\u2000'}
			showMask
		/>
	);
}

TextMaskCustom.propTypes = {
	inputRef: PropTypes.func.isRequired
};

class FormattedInputs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes, onChange, value, label, name } = this.props;

		return (
			<div className={classes.container}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="formatted-text-mask-input">{label}</InputLabel>
					<Input
						name={name}
						value={value}
						onChange={onChange}
						id="formatted-text-mask-input"
						inputComponent={TextMaskCustom}
					/>
				</FormControl>
			</div>
		);
	}
}

FormattedInputs.propTypes = {
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default withStyles(styles)(FormattedInputs);
