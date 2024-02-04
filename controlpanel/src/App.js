import './App.css';
import AnimatedCursor from "react-animated-cursor"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

//Route Imports
import Home from './pages/home'
import Create from './pages/create'
import Devices from './pages/devices.js'
import Scripts from './pages/scripts.js'
import Header from './components/header.js'
import Login from './Auth/login.js'

import Settings from './pages/settings.js'

function App() {

  

  return (
    <div className="App">
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color='255, 0, 240'
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Header/>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/scripts" element={<Scripts/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </Router>
        

    </div>
  );
}

export default App;
