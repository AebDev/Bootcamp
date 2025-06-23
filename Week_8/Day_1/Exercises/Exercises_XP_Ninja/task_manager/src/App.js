import TaskContext from './context/TaskContext';
import AddTask from './components/AddTask';
import DisplayTasks from './components/DisplayTask';
import './App.css';

function App() {
  return (
    <TaskContext>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask />
        <DisplayTasks />
      </div>
    </TaskContext>
  );
}

export default App;
