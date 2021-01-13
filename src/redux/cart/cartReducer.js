import {
    CART_FAILED,
    CART_SUCCESS
  } from './cartTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case CART_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case CART_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default cartReducer
  