const initialState = {
  isLoading: false,
  activity: null,
  error: null,
  smurfs: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ACTIVITY_START":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCHING_DATA_SUCCESS':
      if(action.payload.length > 0) {  
        return {
          ...state,
          smurfs: action.payload,
          isLoading: false,
          error: null
        }
      } else {
        return {
          ...state,
          error: "No results found! Try again?",
          isLoading: false,
          smurfs: null
        }
      }
    case 'FETCHING_DATA_FAIL':
      return {
        ...state,
        isLoading: false
      }
    case 'POST_SMURF':
      return {
        ...state
      }
    default:
      return state;
  }
};