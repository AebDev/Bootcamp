import { useDispatch } from 'react-redux'
import { useRef } from 'react';
import { addTodo } from '../features/todos/todosSlice';

const AddTodo = () => {
    const todoRef = useRef();
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        const todo = todoRef.current.value.trim();
        if (e.key === 'Enter' && todo) {
            dispatch(addTodo(todo));
            todoRef.current.value = '';
        }
    }
    return (
        <input type="text" ref={todoRef} onKeyDown={addTodoHandler} placeholder='Enter somthing...' />
    );
}

export default AddTodo;