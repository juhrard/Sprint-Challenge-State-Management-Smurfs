import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';

// Actions
import { postSmurf, fetchSmurf } from '../actions'

const formStyle = {
  display: 'flex',
  flexFlow: 'column',
  height: '400px',
  justifyContent: 'space-evenly',
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      height: '',
    }
  }

  handleChanges = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });

    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postSmurf(this.state);
    this.setState({
      name: '',
      age: 0,
      height: '',
    })
  }

  render() {
    return (
      <>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <h1 style={{color: 'black'}}>Add A Smurf!</h1>
          <TextField 
            name="name"
            color="secondary"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <TextField 
            name="age"
            color="secondary"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <TextField 
            name="height"
            color="secondary"
            placeholder="Height"
            value={this.state.height}
            onChange={this.handleChanges}
          />
          <Button variant="contained" color="primary" type="submit">Submit!</Button>
          <Button variant="contained" color="primary" onClick={this.props.fetchSmurf} style={{marginTop: '20px'}}>Find Smurfs!</Button>
        </form>
      </>
    )
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
  { postSmurf, fetchSmurf }
)(Form);