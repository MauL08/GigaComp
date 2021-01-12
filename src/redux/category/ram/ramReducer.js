import {
    RAM_FAILED,
    RAM_SUCCESS
  } from './ramTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const ramReducer = (state = initialState, action) => {
    switch (action.type) {
      case RAM_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case RAM_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default ramReducer
  