import './App.css';
import HomeScreen from './components/home/HomeScreen.js'
import Navbar from './components/navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className='App-header'>
      <HomeScreen />
      </div>
    </div>
  );
}

export default App;
