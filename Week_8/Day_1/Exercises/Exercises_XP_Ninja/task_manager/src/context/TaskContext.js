import { createContext, useReducer } from "react";

export const taskManagerContext = createContext();

const TaskContext = ({ children }) => {
    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TASK":
                return [...state, action.payload];
            case "REMOVE_TASK":
                return state.filter(task => task.id !== action.payload.id);
            case "TOGGLE_TASK":
                return state.map(task =>
                    task.id === action.payload.id
                        ? { ...task, completed: !task.completed }
                        : task
                );
            default:
                return state;
        }
    };

    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <taskManagerContext.Provider value={{ tasks, dispatch }}>
            {children}
        </taskManagerContext.Provider>
    );
};

export default TaskContext;
