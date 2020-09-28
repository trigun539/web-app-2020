import { combineReducers } from 'redux'
import config from 'containers/app/reducer'

const rootReducer = history =>
  combineReducers({
    config
  })

export default rootReducer
