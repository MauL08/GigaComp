import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import registerReducer from './register/registerReducer'
import profileReducer from './profile/profileReducer'
import productReducer from './product/productReducer'
import motherboardReducer from './category/motherboard/motherboardReducer'
import ramReducer from './category/ram/ramReducer'
import processorReducer from './category/processor/processorReducer'
import vgaReducer from './category/vga/vgaReducer'
import specificReducer from './specificProduct/specificReducer'
import psuReducer from './category/psu/psuReducer'
import cartReducer from './cart/cartReducer'
import addressReducer from './address/addressReducer'
import paymentReducer from './payment/paymentReducer'




const rootReducer = combineReducers({
  login: loginReducer,
  profile: profileReducer,
  register: registerReducer,
  product: productReducer,
  motherboard: motherboardReducer,
  ram: ramReducer,
  processor: processorReducer,
  vga: vgaReducer,
  psu: psuReducer,
  specific: specificReducer,
  cart: cartReducer,
  address: addressReducer,
  payment: paymentReducer,
})

export default rootReducer
