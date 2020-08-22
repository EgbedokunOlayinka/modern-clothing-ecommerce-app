// Initialize state
const INITIAL_STATE = {
    currentUser: null
};

// a reducer is just a function that takes the current state and an action object, then returns a new state or the current state based on whether the action pertains to that particular reducer or not.
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;