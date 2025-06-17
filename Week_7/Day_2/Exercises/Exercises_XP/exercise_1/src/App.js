import './App.css';
import Car from './Components/Car';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <div className="App">
      <Car model={carinfo.model} name={carinfo.name} />
    </div>
  );
}
export default App;
