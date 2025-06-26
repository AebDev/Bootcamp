import React from 'react';
import PlannerCalendar from './components/Calendar';
import TasksList from './components/TasksList';
import CreateTask from './components/CreateTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <PlannerCalendar />
      <CreateTask />
      <TasksList />
    </div>
  );
}

export default App;
