import React, { Component } from 'react';
import styles, { getStepStyles, getSelectedStepStyles } from './step.css'



export class StepOld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isSelected: false,
            imageSrc: null,
            color: '#99e699',
            compStyles: null
        };

        console.log(props)

        this.setStepProp = this.setStepProp.bind(this);
        this.setConnector = this.setConnector.bind(this);
        // this.updateStyleStateProp = this.updateStyleStateProp.bind(this);
    }

    setConnector(props) {
        console.log(props)
        return (<div >ssss</div>)
    }

    setStepProp(props) {
        console.log(props)
        let style = getStepStyles(props.active)
        // this.updateStyleStateProp(style)



        if (props.selected) {
            style = getSelectedStepStyles(this.state.color)
            // this.updateStyleStateProp(style)
            console.log(style)
            return (
                <div style={styles.shape}>
                    <div style={style.circleRight}></div>
                    <div style={style.rectangle}>
                        <div>hadad</div>
                        <div>gil</div>
                    </div>

                    <div style={style.circleLeft}></div>
                </div>
            )

        }
        console.log(style)

        return (<div style={style.step}>gil</div>)

    }

    // updateStyleStateProp(styleProp) {
    //     this.setState(state => ({
    //         compStyles: styleProp
    //     }));
    // }

    render() {
        return (
            <div>
                <this.setStepProp selected={true} active={true} />
                <this.setConnector first={false} />


            </div>
        );
    }
}