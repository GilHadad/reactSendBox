import React, { Component } from 'react';
// import { Step } from './stepper/step';
import { StepContainer } from './stepper/step-container'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Grid } from 'semantic-ui-react'

import Play from './stepper/play'

class App extends Component {
  render() {
    return (

      <Grid>
        <Grid.Row color={'red'} columns={5} >
          <Grid.Column>1</Grid.Column>
          <Grid.Column>2</Grid.Column>
          <Grid.Column>3</Grid.Column>
          <Grid.Column>4</Grid.Column>
          <Grid.Column>5</Grid.Column>


        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column><StepContainer /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <div><Play /></div>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width={8} color={'blue'}>1</Grid.Column>
          <Grid.Column width={2} color={'green'}>2</Grid.Column>
          <Grid.Column width={3} color={'red'}>3</Grid.Column>
          <Grid.Column width={3} color={'green'}>4</Grid.Column>
        </Grid.Row>
      </Grid>










    );
  }
}

export default App;


