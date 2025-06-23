import { useContext, useRef } from "react";
import { taskManagerContext } from "../context/TaskContext";

const AddTask = () => {
    const { tasks, dispatch } = useContext(taskManagerContext);
    const inputRef = useRef();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputRef.current.value.trim() !== "") {
            addHandle();
        }
    };

    const addHandle = () => {
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title: inputRef.current.value.trim(),
            completed: false
        };
        dispatch({ type: "ADD_TASK", payload: newTask });
        inputRef.current.value = "";
    };

    return (
        <div className="add-task">
            <h3>Add New Task</h3>
            <div className="input-group">
                <input
                    type="text"
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter a new task..."
                    className="task-input"
                />
                <button onClick={addHandle} className="add-btn">
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default AddTask;
