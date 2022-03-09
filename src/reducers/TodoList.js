const initialState = {
    list: [],
    activeId: null
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newList = [...state.list]
            newList.push(action.payload)
            return {
                ...state,
                list: newList,
            }

        case "SET_ACTIVE_TODO":
            const newTodoList = [...state.list]
            const index = action.payload.index
            const newTodo = {
                ...newTodoList[index],
                active: newTodoList[index].active === 'new' ? 'active' : 'new',
            }

            newTodoList[index] = newTodo
            console.log(...newTodoList)
            return {
                ...state,
                list: newTodoList,
            }

        case "REMOVE_TODO":
            let newRemoveTodoList = [...state.list]
            const removeId = action.payload.index
            newRemoveTodoList = newRemoveTodoList.filter((todo, index) => index !== removeId)
            return {
                ...state,
                list: newRemoveTodoList,
            }

        default:
            return state
    }
}

export default todoReducer;