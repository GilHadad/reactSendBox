import React, { Component } from 'react';
import { agreementSteps } from './agreement-steps';
import { Step } from './step';
import { Grid } from 'semantic-ui-react'
import Play from './play'

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

    stepIsDone(stepId) { }

    render() {
        const columns = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((item, index) =>
            <span key={index}>{item}</span>
        )



        const steps = this.state.agreementSteps.map((step, index) =>
            <Grid.Column textAlign='center' className="column-no-padding"><Step info={step} key={step.stage.toString()} allSteps={this.state.agreementSteps} /></Grid.Column>
        )


        return (

            <Grid>
                <Grid.Row columns={5}>{steps}</Grid.Row>
                {/* <Grid.Row columns={11}>{steps}</Grid.Row> */}

                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div className="dividerContainer">
                            <div className="divider">fff</div>
                            <div>34343</div>
                            <div className="divider">ggg</div>
                        </div>



                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>

            </Grid>


            // <div>
            //     <div>{columns}</div>
            //     <div>{steps}</div>
            // </div>

        );
    }
}



{/* <div style="height: 60px; width: 60px; border: 1px dotted rgb(140, 140, 140); border-radius: 100%; display: flex; justify-content: center; flex-direction: column; text-align: center;">gil</div> */ }