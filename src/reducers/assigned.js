import { isEmpty } from '../utils/helper'

const initialState = {
    Loading: true,
    tasks: {},
    empty: true
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_ASSIGNED':
            return {
                Loading: false,
                tasks: action.tasks,
                empty: isEmpty(action.tasks)
            }

        default:
            return state
    }
}