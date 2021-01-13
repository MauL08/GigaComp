import {
    PAYMENT_FAILED,
    PAYMENT_SUCCESS
  } from './paymentTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case PAYMENT_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case PAYMENT_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default paymentReducer
  