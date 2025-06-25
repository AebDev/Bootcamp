import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li key={todo.id}>
            <p>{todo.text}</p>
            <span onClick={() => { dispatch(toggleTodo(todo.id)) }}>{todo.completed ? 'completed' : 'not completed'}</span>
            <button onClick={() => { dispatch(removeTodo(todo.id)) }}>delete</button>

        </li>
    );
}

export default TodoItem;