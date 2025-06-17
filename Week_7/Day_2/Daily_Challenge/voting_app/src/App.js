import { useState } from "react";
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const voteHandle = (e) => {
    const index = Number(e.target.attributes.dataset.value);
    setLanguages(languages => languages.map((lang, i) => i === index ? { ...lang, votes: lang.votes + 1 } : lang));
  }

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      {
        languages.map((language, index) => {
          return <div className="card">
            <p>{language.votes}</p>
            <p>{language.name}</p>
            <button className="vote" dataset={index} onClick={voteHandle}>Click Here</button>
          </div>
        }

        )
      }
    </div>
  );
}

export default App;
