import './App.css';
import HomeScreen from './components/home/HomeScreen.js'
import Navbar from './components/navbar/Navbar.js';
import ProjectScreen from "./components/projects/ProjectScreen.js"
import ResearchScreen from './components/research/research.js';
import EducationScreen from './components/education/education.js';

import { Route, Routes } from 'react-router-dom';
import ExperienceScreen from './components/experience/experienceScreen.js';

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
            <Route path="/experience" element={<ExperienceScreen />} />
            <Route path="/projects" element={<ProjectScreen />} />
            <Route path="/education" element={<EducationScreen />} />
            <Route path="/research" element={<ResearchScreen/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
