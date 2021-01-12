import {
    VGA_FAILED,
    VGA_SUCCESS
  } from './vgaTypes'
  
  const initialState = {
    data: [],
    error: ''
  }
  
  const vgaReducer = (state = initialState, action) => {
    switch (action.type) {
      case VGA_SUCCESS:
        return {
          data: action.payload,
          error: ''
        }
      case VGA_FAILED:
        return {
          data: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default vgaReducer
  