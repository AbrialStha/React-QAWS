import { combineReducers } from 'redux'
import auth from './auth'
import todo from './Todo'

export default combineReducers({
    auth,
    todo
})