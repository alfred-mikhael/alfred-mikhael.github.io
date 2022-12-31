import './App.css';
import HomeScreen from './components/home/HomeScreen.js'
import Navbar from './components/navbar/Navbar.js';
import ContactScreen from "./components/contact/ContactScreen.js";
import ProjectScreen from "./components/projects/ProjectScreen.js"

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='App-header'>
        <div className='App-container'>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/projects" element={<ProjectScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
