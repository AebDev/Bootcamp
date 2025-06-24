import './App.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addingTodo, togglingTodo, removingTodo } from './features/todos/todosSlice'

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todoRef = useRef();

  const handleAddTodo = () => {
    const todo = todoRef.current.value.trim();
    if (todo) {
      dispatch(addingTodo(todo));
      todoRef.current.value = '';
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        ref={todoRef}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span
              style={{ color: todo.isCompleted ? 'red' : 'black' }}
              onClick={() => dispatch(togglingTodo(todo.id))}
            >
              {todo.todo}
            </span>
            <button onClick={() => dispatch(removingTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
