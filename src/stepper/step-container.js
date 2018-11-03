import React, { Component } from 'react';
import { agreementSteps } from './agreement-steps';
import { Step } from './step';
import { Grid } from 'semantic-ui-react'
import { stepUtils, PositionEnum } from './utils';
import stepsImages from './imagesMapper'
import PropTypes from 'prop-types';


export class StepContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agreementSteps: this.props.steps,
            agreementStepsFromParent: this.props.steps,
        };

        this.stepIsDone = this.stepIsDone.bind(this)
        console.log(stepsImages)

    }

    handleStepClick(clickedStepIndex) {
        const { agreementSteps } = this.state;
        const {onStepChange} = this.props;
        const newAgreementSteps = agreementSteps.map((step, index) => {
            const activeStepsIndices = [clickedStepIndex - 1, clickedStepIndex, clickedStepIndex + 1];
            return { ...step, selected: index === clickedStepIndex, active: activeStepsIndices.some(i => i === index) };
        });
        this.setState({ agreementSteps: newAgreementSteps });
        onStepChange(newAgreementSteps);
    }

    stepIsDone(stepId) { }

    drawDivider({ step, position }) {
        const emptyDivider = <div className="stepper-divider-empty"></div>;
        const activeDivider = <div className="stepper-divider-active"></div>;
        const normalDivider = <div className="stepper-divider-non-active"></div>;
        const { agreementSteps } = this.state;
        const { isFirst, isLast, stepAfter, stepBefore } = stepUtils(agreementSteps);

        if (position === PositionEnum.BEFORE) {
            if (isFirst(step)) {
                return emptyDivider;
            } else {
                return step.active && stepBefore(step).active ? activeDivider : normalDivider;
            }
        }

        if (position === PositionEnum.AFTER) {
            if (isLast(step)) {
                return emptyDivider;
            } else {
                return step.active && stepAfter(step).active ? activeDivider : normalDivider;
            }
        }
    }

    render() {
        const { agreementSteps } = this.state;

        const steps = agreementSteps.map((step, index) =>
       
                <div className="stepper-divider-container" key={index}>
                    {this.drawDivider({ step, position: PositionEnum.BEFORE })}
                    <Step settings={step} imageSrc={stepsImages[index]} onClick={this.handleStepClick.bind(this, index)} />
                    {this.drawDivider({ step, position: PositionEnum.AFTER })}
                </div>
         
        )

        return (

            <Grid>
                <Grid.Row columns={1}>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column textAlign='center' className="stepper-row">{steps}</Grid.Column>
                </Grid.Row>
            </Grid>


        );
    }
}
StepContainer.getDerivedStateFromProps = (props, state) => {
    if (props.steps === state.agreementStepsFromParent) {
        return null;
    } else {
        return {
            agreementStepsFromParent: props.steps,
            agreementSteps: props.steps
        };
    }
}

StepContainer.propTypes = {
    onStepChange: PropTypes.func,
    steps: PropTypes.object
};

StepContainer.defaultProps = {
    onStepChange: () => null,
    steps: agreementSteps
};
