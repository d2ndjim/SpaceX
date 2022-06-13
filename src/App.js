import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Profile from './components/profile';
import Rockets from './components/Rocket/Rockets';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
