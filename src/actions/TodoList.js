export const addNewTodo = (hobby) => {
    return {
        type: 'ADD_TODO',
        payload: hobby,
    }
}

export const setActiveTodo = (hobby) => {
    return {
        type: 'SET_ACTIVE_TODO',
        payload: hobby,
    }
}