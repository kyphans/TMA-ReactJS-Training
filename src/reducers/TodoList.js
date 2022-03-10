const initialState = {
    list: [],
    activeId: null
}

const todoReducer = (state = initialState, action) => {
    let newTodoList

    switch (action.type) {
        case "ADD_TODO":
            newTodoList = [...state.list]
            newTodoList.push(action.payload)
            console.log(newTodoList);
            return {
                ...state,
                list: newTodoList,
            }

        case "SET_ACTIVE_TODO":
            newTodoList = [...state.list]
            const index = action.payload.index
            const newTodo = {
                ...newTodoList[index],
                active: newTodoList[index].active === 'new' ? 'active' : 'new',
            }
            newTodoList[index] = newTodo
            return {
                ...state,
                list: newTodoList,
            }

        case "REMOVE_TODO":
            newTodoList = [...state.list]
            newTodoList = newTodoList.filter((todo, index) => todo !== action.payload)
            return {
                ...state,
                list: newTodoList,
            }

        default:
            return state
    }
}

export default todoReducer;