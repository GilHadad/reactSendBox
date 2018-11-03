import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'
 

export class Step extends Component {
  constructor(props) {
    super(props);
    this.showStep = this.showStep.bind(this);
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
        return (<div className="step-active" onClick={clickHandler}><Icon className="step-icon step-icon-color-active" name={settings.iconCode} size='big' /></div>)
      }
      return (<div className="step-non-active" onClick={clickHandler}><Icon className="step-icon step-icon-color-non-active" name={settings.iconCode} size='big' /></div>)
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