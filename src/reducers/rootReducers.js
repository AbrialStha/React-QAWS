import { combineReducers } from 'redux'
import auth from './auth'
import todo from './Todo'
import assigned from './assigned'
import flash_messages from './FlashMessage'

export default combineReducers({
    auth,
    todo,
    assigned,
    flash_messages
})