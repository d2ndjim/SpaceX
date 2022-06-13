import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Profile from './components/profile';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>

    </>
  );
}

export default App;
