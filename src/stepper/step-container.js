import React, { Component } from 'react';
import { agreementSteps } from './agreement-steps';
import { Step } from './step';
import { Grid } from 'semantic-ui-react'
import { stepUtils, PositionEnum } from './utils';
import stepsImages from './imagesMapper'

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

    setDivider({ step, position }) {
        const emptyDivider = "stepper-divider-empty";
        const activeDivider = "stepper-divider-active";
        const nonActiveDivider = "stepper-divider-non-active";
        const { agreementSteps } = this.state;
        const { isFirst, stepBefore } = stepUtils(agreementSteps);

        if (isFirst(step)) {
            return emptyDivider;
        }

        if (position === PositionEnum.BEFORE) {
            return step.active && stepBefore(step).active ? activeDivider : nonActiveDivider;
        }

    }

    render() {
        const { agreementSteps } = this.state;

        const setSteps = agreementSteps.map((step, index) =>
            [
                <div key={`divider${index}`} className={this.setDivider({ step, position: PositionEnum.BEFORE })}></div>,
                <Step key={`step${index}`} settings={step} imageSrc={stepsImages[index]} onClick={this.handleStepClick.bind(this, index)} />
            ]
        )

        return (

            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <div className="stepper-divider-container stepper-row" key={1}>
                            {setSteps}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

