import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';
import myData from './data/myData.json';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(myData);
  }, []);

  if (!data.SocialMedias || !data.Skills || !data.Experiences)
    return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/">Exemple 1</NavLink></li>
          <li><NavLink to="/skills">Exemple 2</NavLink></li>
          <li><NavLink to="/experiences">Exemple 3</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Example1 socialMedias={data.SocialMedias} />} />
        <Route path="/skills" element={<Example2 skills={data.Skills} />} />
        <Route path="/experiences" element={<Example3 experiences={data.Experiences} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;