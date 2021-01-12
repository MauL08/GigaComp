import {
    PROCESSOR_FAILED,
    PROCESSOR_SUCCESS
  } from './processorTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const processorReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROCESSOR_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case PROCESSOR_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default processorReducer
  