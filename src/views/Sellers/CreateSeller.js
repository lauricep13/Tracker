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
import NewPropertyForm from 'components/Properties/NewPropertyForm.js';

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
			seller: newSeller(),
			activeStep: 0,
			completed: {},
			errors: {},
			saving: false,
			success: false
		};

		this.handleComplete = this.handleComplete.bind(this);
	}
	getSteps() {
		return ['Seller Info', 'Property Info', 'Some other info'];
	}

	getStepContent(step) {
		switch (step) {
			case 0:
				return (
					<SellerForm
						errors={this.state.errors}
						onSubmit={this.handleNext}
						submitting={this.state.saving}
					/>
				);
			case 1:
				return (
					<NewPropertyForm
						errors={this.state.errors}
						onSubmit={this.handleNext}
						submitting={this.state.saving}
					/>
				);
			case 2:
				return (
					<form onSubmit={this.handleComplete}>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={this.state.saving}
						>
							Submit
						</Button>
					</form>
				);
			default:
				return 'Unknown step';
		}
	}

	handleNext = values => {
		let activeStep;
		if (this.state.activeStep === 0)
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

	handleStep = step => () => {
		this.setState({
			activeStep: step
		});
	};

	handleComplete = e => {
		e.preventDefault();
		this.setState({ saving: true });
		this.props.actions
			.createSeller(this.state.seller)
			.then(() => this.redirectToSellerList())
			.catch(e => this.setState({ saving: false, success: false }));
	};

	redirectToSellerList() {
		this.setState({ saving: false, success: true });

		this.context.router.history.push('/Sellers');
	}

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
				<div>{this.getStepContent(this.state.activeStep)}</div>
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

const mapStateToProps = state => {
	if (state.seller)
		return {
			seller: state.sellers.payload,
			loading: state.sellers.loading,
			error: state.sellers.error
		};
};

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
