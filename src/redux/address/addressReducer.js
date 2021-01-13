import {
    ADDRESS_FAILED,
    ADDRESS_SUCCESS
  } from './addressTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDRESS_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case ADDRESS_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default addressReducer
  