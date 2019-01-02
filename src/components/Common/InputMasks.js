import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

export const PhoneMask = ({ inputRef, ...other }) => {
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
		/>
	);
};

PhoneMask.propTypes = {
	inputRef: PropTypes.func.isRequired
};
