import axios from "axios";

export const fetchSmurf = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_ACTIVITY_START" });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response);
        dispatch({type: 'FETCHING_DATA_SUCCESS', payload: response.data})
      })
      .catch(error => {
        console.log(error);
        dispatch({type: 'FETCHING_DATA_FAIL', payload: error})
      });
  };
};

export const postSmurf = (smurf) => {
  return dispatch => {
    dispatch({ type: "POST_SMURF", payload: smurf });
    axios
      .post(`http://localhost:3333/smurfs`, {
        name: smurf.name,
        age: Number(smurf.age),
        height: smurf.height
      })
      .then(response => {
        console.log(response);
        dispatch({type: 'POSTING_DATA_SUCCESS', payload: response.data});
        dispatch({ type: "FETCHING_ACTIVITY_START" });
        axios
          .get(`http://localhost:3333/smurfs`)
          .then(response => {
            console.log(response);
            dispatch({type: 'FETCHING_DATA_SUCCESS', payload: response.data})
          })
          .catch(error => {
            console.log(error);
            dispatch({type: 'FETCHING_DATA_FAIL', payload: error})
          });
      })
      .catch(error => {
        console.log(error);
        dispatch({type: 'POSTING_DATA_FAIL', payload: error})
      });
  }
}

export const deleteSmurf = (smurf) => {
  return dispatch => {
    dispatch ({ type: "DELETE_SMURF", payload: smurf });
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(response => {
        console.log(response);
        dispatch({type: 'DELETE_DATA_SUCCESS', payload: response.data})
        dispatch({ type: "FETCHING_ACTIVITY_START" });
        axios
          .get(`http://localhost:3333/smurfs`)
          .then(response => {
            console.log(response);
            dispatch({type: 'FETCHING_DATA_SUCCESS', payload: response.data})
          })
          .catch(error => {
            console.log(error);
            dispatch({type: 'FETCHING_DATA_FAIL', payload: error})
          });
      })
      .catch(error => {
        console.log(error);
        dispatch({type: 'DELETE_DATA_FAIL', payload: error})
      });
  }
}

const thunk = action => next => store => {
  if (typeof action === "function") {
    action();
  } else if (typeof action === "object") {
    next(action);
  }
};