import TaskContext from './context/TaskContext';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';
import DisplayTasks from './components/DisplayTasks';
import './App.css';

function App() {
  return (
    <TaskContext>
      <div className="App">
        <header className="app-header">
          <h1>Enhanced Task Manager</h1>
        </header>
        <main className="app-main">
          <AddTask />
          <TaskFilter />
          <DisplayTasks />
        </main>
      </div>
    </TaskContext>
  );
}

export default App;
