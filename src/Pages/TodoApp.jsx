import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from '../components/TodoApp/TodoForm';
import TodoList from '../components/TodoApp/TodoList';

const TodoApp = () => {

    const todoList = useSelector(state => state.todo.list)
    console.log(todoList);

    return (
        <React.Fragment>
            <h1>TODO APP - WITH REDUX</h1>
            <TodoForm />
            <button>Random</button>
            <TodoList />
        </React.Fragment>
    );
};

export default TodoApp;