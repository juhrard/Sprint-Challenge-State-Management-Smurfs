import React, { Component } from "react";
import { Container, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import "./App.css";

// Components
import Form from './Form'
import SmurfList from './SmurfList'

const container = {
  background: '#add7ff',
  borderRadius: '5px',
  color: 'white',
  width: '800px',
  padding: '50px'
}

const loader = {
  marginTop: '50px'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container style={container}>
          <h1 style={{color: 'black'}}>SMURFS! 2.0 W/ Redux</h1>
          <Form />
          {this.props.isLoading && <Loader style={loader} type="Circles" color="#somecolor" height={80} width={80}/>}
          {!this.props.isLoading && this.props.smurfs && <SmurfList/>}
          {this.props.error && <h2 style={{color: 'black'}}>{this.props.error}</h2>}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
