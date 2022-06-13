import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Profile from './components/profile';
import Missions from './components/mission/missions';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
