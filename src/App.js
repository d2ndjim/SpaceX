import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Profile from './components/profile';
import Rockets from './components/Rocket/Rockets';
import Missions from './components/mission/missions';
import Dragons from './components/Dragons/Dragons';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </>
  );
}

export default App;
