const initialState = {
    isAuthenticated: false,
    user: {}
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
        case 'SET_CURRENT_USER':
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }

        default:
            return state
    }
}