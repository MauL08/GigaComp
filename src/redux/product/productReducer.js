import {
    PRODUCT_FAILED,
    PRODUCT_SUCCESS
  } from './productTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case PRODUCT_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default productReducer
  