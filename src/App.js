import './App.css';
import HomeScreen from './components/home/HomeScreen.js'
import Navbar from './components/navbar/Navbar.js';
import ProjectScreen from "./components/projects/ProjectScreen.js"
import ResearchScreen from './components/research/research.js';
import EducationScreen from './components/education/education.js';
import PaperVisualizationScreen from "./components/paperVisualization/paperVisualizationScreen.js"

import { Route, Routes, useLocation } from 'react-router-dom';
import ExperienceScreen from './components/experience/experienceScreen.js';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/paper-visualization';

  return (
    <div className="App">
      {showNavbar && (
        <div className='navbar-container'>
          <Navbar />
        </div>
      )}
      <div className='App-header'>
        <div className='App-container'>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/experience" element={<ExperienceScreen />} />
            <Route path="/projects" element={<ProjectScreen />} />
            <Route path="/education" element={<EducationScreen />} />
            <Route path="/research" element={<ResearchScreen/>}/>
            <Route
              path="/paper-visualization"
              element={
                <PaperVisualizationScreen
                  root_url={`${process.env.PUBLIC_URL}`}
                  data_file_name="coords.csv.gz"
                  label_file_name="clusters.csv.gz"
                  centroid_file_name="centroids.csv.gz"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
