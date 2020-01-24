import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { deleteSmurf } from '../actions'

// Material-UI styles
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
})

const SmurfList = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        {props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id}/>
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(SmurfList);