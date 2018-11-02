import React, {Component} from 'react';
import PropTypes from 'prop-types';
 

export class Step extends Component {
  constructor(props) {
    super(props);
    this.showStep = this.showStep.bind(this);
    console.log(props)
  }

  showStep() {
    const {settings, onClick} = this.props;
    if (settings.selected) {
      const setpSelectedClass = `step-selected step-selected-${settings.classCode}-color`;
      return (

          <div className={setpSelectedClass}>
          <img src={this.props.imageSrc} alt="yay" className="step-image" />
          {settings.title}
          </div>

      )
    }

    else {
      const clickHandler = settings.active ? onClick : () => null
      if (settings.active) {
        return (<div className="step-active" onClick={clickHandler}>{settings.title}</div>)
      }
      return (<div className="step-non-active" onClick={clickHandler}>{settings.title}</div>)
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