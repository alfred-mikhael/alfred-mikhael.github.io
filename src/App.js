import './App.css';
import HomeScreen from './components/home/HomeScreen.js'
import Navbar from './components/navbar/Navbar.js';
import ProjectScreen from "./components/projects/ProjectScreen.js"
import ResearchScreen from './components/research/research.js';
import EducationScreen from './components/education/education.js';
import PaperVisualizationScreen from "./components/paperVisualization/paperVisualizationScreen.js"

import { Route, Routes, useLocation } from 'react-router-dom';
import ExperienceScreen from './components/experience/experienceScreen.js';

// const MOCK_PAPER_DATA = [
//   {
//     x: -74.02,
//     y: 40.71,
//     arxiv_id: '2401.00001',
//     title: 'Spectral gaps and expansion in high-dimensional graphs',
//     length: 85
//   },
//   {
//     x: -73.98,
//     y: 40.73,
//     arxiv_id: '2401.00002',
//     title: 'Pseudorandomness and derandomization',
//     length: 65
//   },
//   {
//     x: -74.05,
//     y: 40.69,
//     arxiv_id: '2401.00003',
//     title: 'Combinatorial methods in theoretical computer science',
//     length: 110
//   },
//   {
//     x: -73.95,
//     y: 40.68,
//     arxiv_id: '2401.00004',
//     title: 'Markov chains, mixing times, and graph structure',
//     length: 75
//   },
//   {
//     x: -74.08,
//     y: 40.75,
//     arxiv_id: '2401.00005',
//     title: 'Eigenvalue techniques for expander constructions',
//     length: 90
//   },
//   {
//     x: -73.92,
//     y: 40.76,
//     arxiv_id: '2401.00006',
//     title: 'Local-to-global principles for graph expansion',
//     length: 70
//   },
//   {
//     x: -74.10,
//     y: 40.65,
//     arxiv_id: '2401.00007',
//     title: 'Random walks on simplicial complexes',
//     length: 100
//   },
//   {
//     x: -73.90,
//     y: 40.66,
//     arxiv_id: '2401.00008',
//     title: 'Counting subgraphs with algebraic methods',
//     length: 80
//   }
// ];

// const MOCK_CLUSTER_LABELS = [
//   { x: -70.02, y: 40.71, label: 'Spectral Graph Theory', size: 18 },
//   { x: -72.98, y: 40.73, label: 'Pseudorandomness', size: 20 },
//   { x: -71.05, y: 40.69, label: 'Combinatorics', size: 25 },
//   { x: -74.95, y: 40.68, label: 'Markov Chains', size: 18 },
//   { x: -74.08, y: 40.75, label: 'Expanders', size: 18 },
//   { x: -73.92, y: 40.76, label: 'Spectral Methods', size: 40 },
//   { x: -74.10, y: 40.65, label: 'High-Dimensional Expanders', size: 10 },
//   { x: -73.90, y: 40.66, label: 'Graph Enumeration', size: 10 }
// ];

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
                  root_url={process.env.REACT_APP_PAPER_VISUALIZATION_ROOT_URL}
                  data_file_name="data_points.json.gz"
                  label_file_name="cluster_labels.json.gz"
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
