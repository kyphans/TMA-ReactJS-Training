import { Divider, Typography } from 'antd';
import React from 'react';
import Filters from '../components/EnhancedTodoList/Filters';
import TodoList from '../components/EnhancedTodoList/TodoList';

function EnhancedTodoList(props) {
    const { Title } = Typography

    return (
        <div>
            <div
                style={{
                    width: 500,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: 20,
                    boxShadow: '0 0 10px 4px #bfbfbf',
                    borderRadius: 5,
                    height: '80vh',
                }}
            >
                <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
                <Filters />
                <Divider />
                <TodoList />

            </div>
        </div>
    );
}

export default EnhancedTodoList;