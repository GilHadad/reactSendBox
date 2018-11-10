import React, { Component } from 'react';
import { StepContainer } from './stepper/step-container'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Button } from 'semantic-ui-react';
import { LoadingModal } from './loadingModal/loadingModal';
import { LoadingSideModal } from './loadingSideModal/loadingSideModal';

class App extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };



  render() {

    return (

      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column><StepContainer /></Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row className="loading-modal-row">
          <Button color='purple' onClick={this.showModal}>show modal</Button>
          <LoadingModal show={this.state.show} handleClose={this.hideModal} />
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
<LoadingSideModal />
        </Grid.Row>
      </Grid>










    );
  }
}

export default App;


