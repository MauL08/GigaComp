import {
    LOGIN_FAILED,
    LOGIN_SUCCESS
  } from './loginTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case LOGIN_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default loginReducer
  