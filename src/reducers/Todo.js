import { isEmpty } from '../utils/helper'

const initialState = {
    Loading: true,
    tasks: {},
    empty: true
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_TODO':
            return {
                Loading: false,
                tasks: action.tasks,
                empty: isEmpty(action.tasks)
            }

        case 'START_TODO_TASK':
            // console.log(state.tasks.length)
            return {
                Loading: action.task_id ? false : true,
                tasks: state.tasks.filter(({ _id }) => _id !== action.task_id),
                empty: false
            }

        default:
            return state
    }
}