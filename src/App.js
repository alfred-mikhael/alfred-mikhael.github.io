import './App.css';
import HomeScreen from './components/home/HomeScreen.js'
import Navbar from './components/navbar/Navbar.js';
import ProjectScreen from "./components/projects/ProjectScreen.js"
import ResearchScreen from './components/research/research.js';
import EducationScreen from './components/education/education.js';
import { lazy, Suspense } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import ExperienceScreen from './components/experience/experienceScreen.js';

const PaperVisualizationScreen = lazy(() => import('./components/paperVisualization/paperVisualizationScreen.js'));

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
                <Suspense fallback={<p role="status">Loading visualization…</p>}>
                  <PaperVisualizationScreen
                    root_url={"https://fido.mikhaels.org"}
                    data_file_name="coords.csv.gz"
                    label_file_name="clusters.csv.gz"
                    centroid_file_name="centroids.csv.gz"
                  />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
