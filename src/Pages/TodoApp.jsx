import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, removeTodo, setActiveTodo } from '../actions/TodoList';
import TodoForm from '../components/TodoApp/TodoForm';
import TodoList from '../components/TodoApp/TodoList';

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

const TodoApp = () => {

    const todoList = useSelector(state => state.todo.list)
    const dispatch = useDispatch()

    const handleAddTodo = (value) => {
        const newID = randomNumber()
        const newTodo = {
            id: newID,
            title: value,
            active: 'new',
        }
        console.log(newTodo);
        const action = addNewTodo(newTodo)
        dispatch(action)
    }

    const handleTodoClick = (todo, index) => {
        const action = setActiveTodo(todo, index)
        dispatch(action)
    }

    const handleRemoveTodoClick = (todo) => {
        const action = removeTodo(todo)
        dispatch(action)
    }

    return (
        <div className="TodoApp" style={{ "margin": "30px" }}>
            <h1>TODO APP - WITH REDUX</h1>
            <TodoForm
                onSubmit={handleAddTodo}
            />
            <TodoList
                todoList={todoList}
                onTodoClick={handleTodoClick}
                onRemoveButtonClick={handleRemoveTodoClick}
            />
        </div>
    );
};

export default TodoApp;