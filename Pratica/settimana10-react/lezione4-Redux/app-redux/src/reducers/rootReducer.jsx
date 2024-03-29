import {combineReducers} from 'redux'
import favouriteReducer from './favouriteReducer'

const rootReducer = combineReducers({
  favourite: favouriteReducer
})

export default rootReducer