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
      const selectedStepStyle = getSelectedStepStyles(settings.colorCode)
      return (
        <div>
          <div style={styles.shape}>
            <div style={selectedStepStyle.circleRight}></div>
            <div style={selectedStepStyle.rectangle}>
              <div>{settings.title}</div>
            </div>
            <div style={selectedStepStyle.circleLeft}></div>
          </div>
        </div>
      )
    }

    else {
      const stepStyle = getStepStyles(settings.active);
      const clickHandler = settings.active ? onClick : () => null
      return (<div style={stepStyle.step} onClick={clickHandler}>{settings.title}</div>)
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