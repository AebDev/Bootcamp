import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div className="App">
      <h3>First name : {user.firstName}</h3>
      <h3>Last name : {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

    </div>
  );
}

export default App;
