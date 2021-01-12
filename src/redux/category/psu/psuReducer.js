import {
    PSU_FAILED,
    PSU_SUCCESS
  } from './psuTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const psuReducer = (state = initialState, action) => {
    switch (action.type) {
      case PSU_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case PSU_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default psuReducer
  