import { createContext, useReducer } from "react";

export const taskManagerContext = createContext();

const TaskContext = ({ children }) => {
    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TASK":
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload]
                };
            case "REMOVE_TASK":
                return {
                    ...state,
                    tasks: state.tasks.filter(task => task.id !== action.payload.id)
                };
            case "TOGGLE_TASK":
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.payload.id
                            ? { ...task, completed: !task.completed }
                            : task
                    )
                };
            case "EDIT_TASK":
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.payload.id
                            ? { ...task, title: action.payload.title }
                            : task
                    )
                };
            case "SET_FILTER":
                return {
                    ...state,
                    filter: action.payload
                };
            default:
                return state;
        }
    };

    const initialState = {
        tasks: [],
        filter: "all" // "all", "active", "completed"
    };

    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <taskManagerContext.Provider value={{ ...state, dispatch }}>
            {children}
        </taskManagerContext.Provider>
    );
};

export default TaskContext;
