const initialState = {
    Loading: true,
    tasks: {}
}

//To check an empty object
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_TODO':
            return {
                Loading: isEmpty(action.tasks),
                tasks: action.tasks
            }

        case 'START_TODO_TASK':
            return {
                Loading: action.task_id ? false : true,
                tasks: state.tasks.filter(({ _id }) => _id !== action.task_id)
            }

        default:
            return state
    }
}