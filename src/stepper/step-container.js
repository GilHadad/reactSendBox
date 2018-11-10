import React, { Component } from 'react';
import { agreementSteps } from './agreement-steps';
import { Step } from './step';
import { Grid } from 'semantic-ui-react'
import { stepUtils, PositionEnum } from './utils';
import stepsImages from './imagesMapper'

export class StepContainer extends Component {

    constructor(props) {
        const aaa = 2; 
        console.log('start at: ', aaa)

        super(props);
        this.state = {
            agreementSteps: this.setCorrentStep(aaa)
        };

             

    }

    setCorrentStep(correntStep) {
        return agreementSteps.map((step) => {
            if (step.stage === correntStep) {
                step.selected = true;
                return step
            } else {
                step.selected = false;
                return step
            }
        });
        
    }

    handleStepClick(clickedStepIndex) {
        const { agreementSteps } = this.state;
        const newAgreementSteps = agreementSteps.map((step, index) => {
            return { ...step, selected: index === clickedStepIndex};
        });
        this.setState({ agreementSteps: newAgreementSteps });
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

    getSelectedStep() {
        const selectedStep = this.state.agreementSteps.filter((step) => {
            return step.selected
        })

        

        return selectedStep[0].stage
    }

    render() {
        const { agreementSteps } = this.state;

        console.log('render')

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

