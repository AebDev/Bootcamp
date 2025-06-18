import FormComponent from './Components/FormComponent';
import ShowComponent from './Components/ShowComponent';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [destination, setDestination] = useState('');
  const [restrictions, setRestrictions] = useState([]);
  return (
    <div className="app">
      <div className="app-header">Sample form</div>
      <div className="form">
        <FormComponent
          setFirstName={setFirstName}
          setLastName={setLastName}
          setAge={setAge}
          setGender={setGender}
          setDestination={setDestination}
          setRestrictions={setRestrictions} />
      </div>
      <hr />
      <div className='show'>
        <ShowComponent
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
          destination={destination}
          restrictions={restrictions}
        />
      </div>
    </div>
  );
}

export default App;
