import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

//Route Imports
import Home from './pages/home'
import Create from './pages/create'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
