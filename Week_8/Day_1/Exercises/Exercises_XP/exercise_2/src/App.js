import { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef();
  const counter = document.getElementById('counter');
  const ShowCounter = () => counter.innerText = inputRef.current.value.length;


  return (
    <div className="App">
      <input type="text" ref={inputRef} onInput={ShowCounter} />
      <p>Counter : <span id="counter">{inputRef.current ? inputRef.current.value.length : 0}</span></p>
    </div>
  );
}

export default App;
