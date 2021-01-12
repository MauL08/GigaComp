import {
    MOTHERBOARD_FAILED,
    MOTHERBOARD_SUCCESS
  } from './motherboardTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const motherboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case MOTHERBOARD_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case MOTHERBOARD_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default motherboardReducer
  