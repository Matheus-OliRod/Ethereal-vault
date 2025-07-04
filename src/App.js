import Navbar from './components/navbar/Navbar';
import Featured from './views/featured/Featured';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import './App.css';
import Profile from './views/profile/Profile';

// Importing icons from Shoelace framework

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';


setBasePath('/node_modules/@shoelace-style/shoelace/dist'); // or wherever your assets live

registerIconLibrary('default', {
  resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static/icons/${name}.svg`,
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

// Ended importing

function App() {
  return (
    <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route index path='/' element={<Featured />} />
        <Route path='/Hello' element={<h2>Hello, World</h2>} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
