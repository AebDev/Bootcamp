import './App.css';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    operation: 'Add',
    firstNumber: 0,
    secondNumber: 0,
  });
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const num1 = parseFloat(form.firstNumber);
    const num2 = parseFloat(form.secondNumber);

    // Check if numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calculatedResult;

    switch (form.operation) {
      case 'Add':
        calculatedResult = num1 + num2;
        break;
      case 'Subtract':
        calculatedResult = num1 - num2;
        break;
      case 'Multiply':
        calculatedResult = num1 * num2;
        break;
      case 'Divide':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult.toString());
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className='title'>
          <select name="operation" onChange={handleInput} value={form.operation}>
            <option value="Add">Adding</option>
            <option value="Subtract">Subtracting</option>
            <option value="Multiply">Multiplying</option>
            <option value="Divide">Dividing</option>
          </select>
          <p> Two Numbers</p>
        </div>
        <div>
          <input
            type="number"
            name='firstNumber'
            onChange={handleInput}
            value={form.firstNumber}
            required
          />
          <input
            type="number"
            name='secondNumber'
            onChange={handleInput}
            value={form.secondNumber}
            required
          />
        </div>
        <div className='button'>
          <button type="submit">{form.operation} Them!</button>
        </div>
      </form>
      <div className='result-container'>
        <p className='result'>{result}</p>
      </div>
    </div>
  );
}

export default App;
