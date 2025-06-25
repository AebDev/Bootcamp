import { useSelector } from 'react-redux';
import React from 'react';
import TodoItem from './TodoItem';


const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <ul>
            {todos.map(todo =>
                <TodoItem todo={todo} />
            )}
        </ul>
    );
}

export default TodoList;