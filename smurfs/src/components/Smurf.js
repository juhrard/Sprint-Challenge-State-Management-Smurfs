import React from 'react';
import { Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Actions
import { deleteSmurf } from '../actions'

// Material-UI styles
const useStyles = makeStyles({
  card: {
    background: 'white',
    color: 'black',
    width: 300,
    padding: '10px',
    margin: '10px'
  }
})

const Smurf = props => {
  const classes = useStyles();
  console.log(props.smurf)
  return (
    <>
      <Card className={classes.card}>
        <h2>{props.smurf.name}</h2>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
        <Button variant="contained" color="primary" onClick={() => props.deleteSmurf(props.smurf)}>Delete Smurf!</Button>
      </Card>
    </>
  )
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);