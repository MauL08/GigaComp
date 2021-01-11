import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import registerReducer from './register/registerReducer'
import navigationReducer from './navigation/navigationReducer'
import productReducer from './product/productReducer'




const rootReducer = combineReducers({
  login: loginReducer,
  navigation: navigationReducer,
  register: registerReducer,
  product: productReducer,
})

export default rootReducer
