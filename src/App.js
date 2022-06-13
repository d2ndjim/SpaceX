import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Profile from './components/profile';
import Dragons from './components/Dragons/Dragons';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>

    </>
  );
}

export default App;
