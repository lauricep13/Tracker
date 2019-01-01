import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'actions/sellerActions.js';

// Material ui
import {
	Typography,
	Stepper,
	Step,
	Button,
	withStyles,
	StepButton
} from '@material-ui/core';

// Core components
import SellerForm from 'components/Sellers/SellerForm.js';
import SaveButton from 'components/Common/SaveButton.js';
import CustomizedSnackbar from 'components/Common/CustomizedSnackbar.js';

const styles = theme => ({
	root: {
		width: '90%'
	},
	button: {
		marginRight: theme.spacing.unit
	},
	completed: {
		display: 'inline-block'
	},
	instructions: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	}
});

class CreateSeller extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			seller: Object.assign({}, this.props.seller),
			activeStep: 0,
			completed: {},
			errors: {},
			saving: false,
			success: false
		};

		this.handleComplete = this.handleComplete.bind(this);
	}

	componentWillreceiveProps(nextProps) {
		if (this.props.seller.id !== nextProps.seller.id) {
			this.setState({ seller: Object.assign({}, nextProps.seller) });
		}
	}

	getSteps() {
		return ['Seller Info', 'Property Info', 'Some other info'];
	}

	getStepContent(step) {
		switch (step) {
			case 0:
				return (
					<SellerForm
						seller={this.state.seller}
						errors={this.state.errors}
						onSubmit={this.handleNext}
						submitting={this.state.saving}
					/>
				);
			case 1:
				return 'An ad group contains one or more ads which target a shared set of keywords.';
			case 2:
				return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
			default:
				return 'Unknown step';
		}
	}

	handleNext = values => {
		let activeStep;
		this.setState({ seller: Object.assign(this.state.seller, values) });

		if (this.isLastStep() && !this.allStepsCompleted()) {
			activeStep = this.getSteps().findIndex(
				(step, i) => !(i in this.state.completed)
			);
		} else {
			activeStep = this.state.activeStep + 1;
		}
		this.setState({
			activeStep
		});
	};

	handleBack = () => {
		this.setState(state => ({
			activeStep: state.activeStep - 1
		}));
	};

	handleStep = step => () => {
		this.setState({
			activeStep: step
		});
	};

	handleComplete = () => {
		this.setState({ saving: true });
		this.props.actions
			.createSeller(this.state.seller)
			.then(() => this.redirectToSellerList())
			.catch(() => this.setState({ saving: false, success: false }));
	};

	redirectToSellerList() {
		this.setState({ saving: false, success: true });

		this.context.router.history.push('/Sellers');
	}

	handleReset = () => {
		this.setState({
			activeStep: 0,
			completed: {}
		});
	};

	completedSteps() {
		return Object.keys(this.state.completed).length;
	}

	totalSteps() {
		return this.getSteps().length;
	}

	isLastStep() {
		return this.state.activeStep === this.totalSteps() - 1;
	}

	allStepsCompleted() {
		return this.completedSteps() === this.getSteps().length;
	}
	render() {
		const { classes } = this.props;
		const { activeStep } = this.state;

		return (
			<div>
				<Typography variant="h6">Create seller</Typography>

				<Stepper nonLinear activeStep={activeStep}>
					{this.getSteps().map((step, index) => {
						return (
							<Step key={step}>
								<StepButton
									onClick={this.handleStep(index)}
									completed={this.state.completed[index]}
								>
									{step}
								</StepButton>
							</Step>
						);
					})}
				</Stepper>
				<div>
					{this.allStepsCompleted() ? (
						<div>
							<Typography className={classes.instructions}>
								{'All steps completed'}
							</Typography>
						</div>
					) : (
						<div>
							{this.getStepContent(this.state.activeStep)}
							<div>
								<Button
									disabled={activeStep === 0}
									onClick={this.handleBack}
									className={classes.button}
								>
									Back
								</Button>
								{!this.isLastStep() ? (
									<Button
										variant="contained"
										color="primary"
										onClick={this.handleNext}
										className={classes.button}
									>
										Next
									</Button>
								) : (
									<SaveButton
										variant="contained"
										color="primary"
										onSave={this.handleComplete}
										success={this.state.success}
										saving={this.state.saving}
									>
										Save
									</SaveButton>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

function newSeller() {
	return {
		name: '',
		isNameVerified: false,
		email: '',
		cellNumber: '(   )    -    ',
		isCellVerified: false,
		isTextingOk: false,
		alternatePhoneNumber: '',
		bestTimeToCall: '',
		otherContacts: [],
		leadstatus: '',
		communicationStatus: ''
	};
}

function mapStateToProps(state, ownProps) {
	return {
		seller: newSeller()
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(sellerActions, dispatch)
	};
}

CreateSeller.contextTypes = {
	router: PropTypes.object
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(CreateSeller));
