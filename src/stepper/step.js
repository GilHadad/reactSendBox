import React, { Component } from 'react';
import styles, { getStepStyles, getSelectedStepStyles, getDividerStyle } from './step.css'





export class Step extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepAfter: this.props.allSteps[this.props.info.stage + 1],
            stepBefore: this.props.allSteps[this.props.info.stage - 1]
        };
        console.log(props)
        console.log(props.info.stage)
        console.log(this.state)

        this.showStep = this.showStep.bind(this);
        this.showDivider = this.showDivider.bind(this);

    }

    showDivider(atts) {
        if (atts.location === 'before' && this.state.stepBefore) {
            return ( this.props.info.active ? <div className="divider-active"></div> : <div className="divider-non-active"></div>)
        }
        if (atts.location === 'after' && this.state.stepAfter) {
            return (this.props.info.active ? <div className="divider-active"></div> : <div className="divider-non-active"></div>)
        }

        return(<div className="divider-empty"></div>)

    }



    showStep() {
        let selectedStepStyle;
        if (this.props.info.selected) {
            selectedStepStyle = getSelectedStepStyles(this.props.info.colorCode)
            return (
                <div>
                    <div style={styles.shape}>
                        <div style={selectedStepStyle.circleRight}></div>
                        <div style={selectedStepStyle.rectangle}>
                            <div>{this.props.info.title}</div>
                        </div>
                        <div style={selectedStepStyle.circleLeft}></div>



                    </div>
                </div>

            )
        }

        else {
            selectedStepStyle = getStepStyles(this.props.info.active)
            return (<div style={selectedStepStyle.step}>gil</div>)
        }
    }

    render() {
        return (
            <div className="dividerContainer">
                <this.showDivider location={'before'} />
                <this.showStep />
                <this.showDivider location={'after'} />





            </div>
        );
    }
}
