import { combineReducers } from 'redux'
import auth from './auth'
import todo from './Todo'
import assigned from './assigned'

export default combineReducers({
    auth,
    todo,
    assigned
})