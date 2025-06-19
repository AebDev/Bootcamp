import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar bg-blue">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/Profile">Profile</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/Shop">Shop</NavLink></li>
        </ul>
      </nav>

      <Routes>

        <Route path='/' element=
          {
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          } />

        <Route path='/Profile' element=
          {
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          } />

        <Route path='/Shop' element=
          {
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          } />

      </Routes>
    </BrowserRouter>
  );

}

const HomeScreen = () => (<h1>Home</h1>);

const ProfileScreen = () => {
  return <h1>Profile Screen</h1>
}

const ShopScreen = () => {
  throw new Error("An error has occured.");
  ;

}

export default App;
