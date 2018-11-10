import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Icon } from 'semantic-ui-react'


export class LoadingModal extends Component {
    constructor(props) {
        super(props);
        console.log(props)
      }



    render() {
        const showHideClassName = this.props.show ? "loading-modal loading-display-block" : "loading-modal loading-display-none";
        return <div className={showHideClassName}>
            <section className="loading-modal-main">
                this is the modal
                <button onClick={this.props.handleClose}>close</button>
            </section>
        </div>;
    }
}

LoadingModal.propTypes = {
    show: PropTypes.boolean,
    showHideClassname: PropTypes.func,
    handleClose: PropTypes.func,
  }
  
  LoadingModal.defaultProps = {
    show: {},
    showHideClassname: () => null,
    handleClose: () => null
  }