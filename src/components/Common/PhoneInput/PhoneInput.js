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
	state = {
		textmask: '(   )    -    ',
		numberformat: '1320'
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	render() {
		const { classes, onChange } = this.props;
		const { textmask } = this.state;
		debugger;
		return (
			<div className={classes.container}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="formatted-text-mask-input">
						react-text-mask
					</InputLabel>
					<Input
						value={textmask}
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
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormattedInputs);
