export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

export const setActiveTodo = (todo, index) => {
    return {
        type: 'SET_ACTIVE_TODO',
        payload: { todo, index },
    }
}

export const removeTodo = (todo, index) => {
    return {
        type: 'REMOVE_TODO',
        payload: { todo, index },
    }
}