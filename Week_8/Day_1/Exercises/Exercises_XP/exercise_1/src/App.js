import './App.css';
import Switcher, { ThemeContext } from './components/Switcher';
import { useContext } from 'react'

function App() {

  return (
    <Switcher>
      <AppContent />
    </Switcher>
  );
}

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <header className="App-header">
        <h1>Theme Switcher</h1>
        <p>Click the button below to toggle between light and dark themes.</p>
      </header>
      <main>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </main>
    </div >
  );
}

export default App;
