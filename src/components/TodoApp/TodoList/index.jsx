import React from 'react';
import './TodoList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup } from "react-bootstrap";

function TodoList(props) {
    const { todoList, onTodoClick, onRemoveButtonClick } = props

    const handleTodoClick = (todo, index) => {
        if (onTodoClick) {
            onTodoClick(todo, index)
        }
    }

    const handleRemoveTodoClick = (todo, index) => {
        if (onRemoveButtonClick) {
            onRemoveButtonClick(todo, index)
        }
    }
    return (
        <ListGroup className="todo">
            {todoList.map((todo, index) => (
                <ListGroup.Item
                    key={todo.id}
                    className="todo-list"
                >
                    <div
                        className={todo.active}
                        onClick={() => handleTodoClick(todo, index)}
                    >
                        {todo.title}

                    </div>
                    <Button
                        className=""
                        variant="danger"
                        style={{ "marginLeft": "auto", }}
                        onClick={() => handleRemoveTodoClick(todo, index)}
                    >
                        X
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default TodoList;