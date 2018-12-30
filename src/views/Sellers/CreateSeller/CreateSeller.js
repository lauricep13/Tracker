import React, { Component } from 'react';

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
import SellerSteps from 'views/Sellers/CreateSeller/SellerSteps/SellerSteps.js';
import NewSellerInput from 'views/Sellers/CreateSeller/CreateSeller.js';

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

function getStepContent(step) {
	const stepElement = SellerSteps[step].stepComponent;

	switch (step) {
		case 0:
			return 'testing';
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

class CreateSeller extends Component {
	state = {
		activeStep: 0,
		completed: {}
	};

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};

	handleNext = () => {
		let activeStep;

		if (this.isLastStep() && !this.allStepsCompleted()) {
			activeStep = SellerSteps.findIndex(
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
		const { completed } = this.state;
		completed[this.state.activeStep] = true;
		this.setState({
			completed
		});
		this.handleNext();
	};

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
		return SellerSteps.length;
	}

	isLastStep() {
		return this.state.activeStep === this.totalSteps() - 1;
	}

	allStepsCompleted() {
		return this.completedSteps() === SellerSteps.length;
	}
	render() {
		const { classes } = this.props;
		const { activeStep } = this.state;
		return (
			<div>
				<Typography variant="h6">Create seller</Typography>

				<Stepper nonLinear activeStep={activeStep}>
					{SellerSteps.map((step, index) => {
						return (
							<Step key={step.stepHeader}>
								<StepButton
									onClick={this.handleStep(index)}
									completed={this.state.completed[index]}
								>
									{step.stepHeader}
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
							<Typography className={classes.instructions}>
								{getStepContent(this.state.activeStep)}
							</Typography>
							<div>
								<Button
									disabled={activeStep === 0}
									onClick={this.handleBack}
									className={classes.button}
								>
									Back
								</Button>
								<Button
									variant="contained"
									color="primary"
									onClick={this.handleNext}
									className={classes.button}
								>
									Next
								</Button>
								{activeStep !== SellerSteps.length &&
									(this.state.completed[this.state.activeStep] ? (
										<Typography variant="caption" className={classes.completed}>
											Step {activeStep + 1} already completed
										</Typography>
									) : (
										<Button
											variant="contained"
											color="primary"
											onClick={this.handleComplete}
										>
											{this.completedSteps() === this.totalSteps()
												? 'Finish'
												: 'Complete Step'}
										</Button>
									))}
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(CreateSeller);
