const initialState = {
    list: [],
    activeID: null
}

const todoReducer = (state = initialState, action) => {
    switch (true) {
        case "ADD_TODO":
            return state
        case "SET_ACTIVE_TODO":
            return state
        default:
            return state
    }
}

export default todoReducer;