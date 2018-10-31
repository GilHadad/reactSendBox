import React, { Component } from 'react';
import { StepContainer } from './stepper/step-container'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (

      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column><StepContainer /></Grid.Column>
        </Grid.Row>
      </Grid>










    );
  }
}

export default App;


