import './App.css';
import React from "react";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <UserData />
    </div>
  );
}

export default App;
