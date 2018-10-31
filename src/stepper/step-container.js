import React, { Component } from 'react';
import { agreementSteps } from './agreement-steps';
import { Step } from './step';
import { Grid } from 'semantic-ui-react'
import { stepUtils, PositionEnum } from './utils';

export class StepContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agreementSteps: agreementSteps
        };

        this.stepIsDone = this.stepIsDone.bind(this)

    }

    handleStepClick(clickedStepIndex) {
        const { agreementSteps } = this.state;
        const newAgreementSteps = agreementSteps.map((step, index) => {
            const activeStepsIndices = [clickedStepIndex - 1, clickedStepIndex, clickedStepIndex + 1];
            return { ...step, selected: index === clickedStepIndex, active: activeStepsIndices.some(i => i === index) };
        });
        this.setState({ agreementSteps: newAgreementSteps });
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
                    <Step settings={step} onClick={this.handleStepClick.bind(this, index)} />
                    {this.drawDivider({ step, position: PositionEnum.AFTER })}
                </div>
         
        )

        return (

            <Grid>
                <Grid.Row columns={1}>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column textAlign='center'>{steps}</Grid.Column>
                </Grid.Row>
            </Grid>


        );
    }
}

