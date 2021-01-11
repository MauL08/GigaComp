import {
    NAVIGATION_FAILED,
    NAVIGATION_SUCCESS
  } from './navigationTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
      case NAVIGATION_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case NAVIGATION_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default navigationReducer
  