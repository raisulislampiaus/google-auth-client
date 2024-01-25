import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Headers from './Components/Headers';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Headers />
      <Routes>
        
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
      </Routes>
    </>
  );
}

export default App;
