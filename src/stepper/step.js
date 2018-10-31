import React, {Component} from 'react';
import styles, {getStepStyles, getSelectedStepStyles, getDividerStyle} from './step.css'
import PropTypes from 'prop-types';

export class Step extends Component {
  constructor(props) {
    super(props);

    console.log(props)
    console.log(props.settings.stage)
    console.log(this.state)

    this.showStep = this.showStep.bind(this);
  }

  showStep() {
    const {settings, onClick} = this.props;
    if (settings.selected) {
      // const circleRightClass = `step-selected-circle-right step-selected-${settings.classCode}-color`;
      // const circleLeftClass = `step-selected-circle-left step-selected-${settings.classCode}-color`;
      // const rectangleClass = `step-selected-rectangle step-selected-${settings.classCode}-color`;
      const setpSelectedClass = `step-selected step-selected-${settings.classCode}-color`;
      return (
        <div>
          <div className={setpSelectedClass}>{settings.title}</div>
          {/* <div className="step-selected-shape-container">
            <div className={circleRightClass}></div>
            <div className={rectangleClass}>
              <div>{settings.title}</div>
            </div>
            <div className={circleLeftClass}></div>
          </div> */}
        </div>
      )
    }

    else {
      const clickHandler = settings.active ? onClick : () => null
      if (settings.active) {
        return (<div className="step-active" onClick={clickHandler}>{settings.title}</div>)
      }
      return (<div className="step-non-active" onClick={clickHandler}>{settings.title}</div>)
      // const stepStyle = getStepStyles(settings.active);
      // const clickHandler = settings.active ? onClick : () => null
      // return (<div style={stepStyle.step} onClick={clickHandler}>{settings.title}</div>)
    }
  }

  render() {
    return this.showStep();
  }
}

Step.propTypes = {
  settings: PropTypes.object,
  onClick: PropTypes.func
}

Step.defaultProps = {
  settings: {},
  onClick: () => null
}