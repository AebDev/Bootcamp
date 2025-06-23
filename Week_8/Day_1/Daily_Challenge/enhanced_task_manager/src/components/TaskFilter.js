import { useContext } from "react";
import { taskManagerContext } from "../context/TaskContext";

const TaskFilter = () => {
    const { filter, dispatch } = useContext(taskManagerContext);

    const setFilter = (filterType) => {
        dispatch({ type: "SET_FILTER", payload: filterType });
    };

    return (
        <div className="task-filter">
            <h4>Filter Tasks</h4>
            <div className="filter-buttons">
                <button
                    className={`filter-btn ${filter === "all" ? "active" : ""}`}
                    onClick={() => setFilter("all")}
                >
                    All Tasks
                </button>
                <button
                    className={`filter-btn ${filter === "active" ? "active" : ""}`}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`filter-btn ${filter === "completed" ? "active" : ""}`}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};

export default TaskFilter;
