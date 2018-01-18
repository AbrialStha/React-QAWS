import { combineReducers } from 'redux'
import auth from './auth'
import todo from './Todo'
import assigned from './assigned'
import flash_messages from './FlashMessage'

const appReducer = combineReducers({
    /* your app’s top-level reducers */
    auth,
    todo,
    assigned,
    flash_messages
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;