import React, {Component} from 'react';
import {agreementSteps} from './agreement-steps';
import {Step} from './step';
import {Grid} from 'semantic-ui-react'
import Play from './play'
import {stepUtils, PositionEnum} from './utils';

// import {StepOld} from './step_old';

export class StepContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agreementSteps: agreementSteps
    };

    console.log(this.state.agreementSteps)
    this.stepIsDone = this.stepIsDone.bind(this)

  }

  handleStepClick(clickedStepIndex) {
    const {agreementSteps} = this.state;
    const newAgreementSteps = agreementSteps.map((step, index) => {
      const activeStepsIndices = [clickedStepIndex -1 , clickedStepIndex, clickedStepIndex + 1];
      return {...step, selected: index === clickedStepIndex, active: activeStepsIndices.some(i => i === index)};
    });
    this.setState({agreementSteps: newAgreementSteps});
  }

  stepIsDone(stepId) {}

  drawDivider({step, position}) {
    const emptyDivider = <div className="divider-empty"></div>;
    const activeDivider = <div className="divider-active"></div>;
    const normalDivider =  <div className="divider-non-active"></div>;
    const {agreementSteps} = this.state;
    const {isFirst, isLast, stepAfter, stepBefore} = stepUtils(agreementSteps);

    if (position === PositionEnum.BEFORE) {
      if (isFirst(step)) {
        return emptyDivider;
      } else {
        return step.active && stepBefore(step).active ? activeDivider: normalDivider;
      }
    }

    if (position === PositionEnum.AFTER) {
      if (isLast(step)) {
        return emptyDivider;
      } else {
        return step.active && stepAfter(step).active ? activeDivider: normalDivider;
      }
    }
  }

  render() {
    const {agreementSteps} = this.state;

    const steps = agreementSteps.map((step, index) =>
      <Grid.Column textAlign='center' className="column-no-padding" key={index}>
        <div className="dividerContainer">
          {this.drawDivider({step, position: PositionEnum.BEFORE})}
          <Step settings={step} onClick={this.handleStepClick.bind(this, index)} />
          {this.drawDivider({step, position: PositionEnum.AFTER})}
        </div>
      </Grid.Column>
    )


    return (

      <Grid>
        <Grid.Row columns={5}>{steps}</Grid.Row>
        {/* <Grid.Row columns={11}>{steps}</Grid.Row> */}

        {/* <Grid.Row columns={2}>
                    <Grid.Column>
                        <div className="dividerContainer">
                            <div className="divider">fff</div>
                            <div>34343</div>
                            <div className="divider">ggg</div>
                        </div>



                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row> */}

      </Grid>


      // <div>
      //     <div>{columns}</div>
      //     <div>{steps}</div>
      // </div>

    );
  }
}



{/* <div style="height: 60px; width: 60px; border: 1px dotted rgb(140, 140, 140); border-radius: 100%; display: flex; justify-content: center; flex-direction: column; text-align: center;">gil</div> */}