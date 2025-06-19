import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  });

  const handleSubmit = async () => {

    try {
      const res = await fetch('https://webhook.site/37ddd537-9e20-49b4-a977-5b9bad4cbc03', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log('Sending data:', data);

      if (res.ok) {
        const responseData = await res.json();
        console.log('Response:', responseData);
      } else {
        throw new Error(`Error: ${res.statusText}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }


  return (
    <div className="App">
      <button onClick={handleSubmit}>Click me to post some data</button>

    </div>
  );
}

export default App;
