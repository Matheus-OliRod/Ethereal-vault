import Navbar from './views/navbar/Navbar';
import Featured from './views/featured/Featured';
import Chat from './views/chat/Chat';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import './App.css';
import Profile from './views/profile/Profile';
import ItemCard from './views/item-card/ItemCard';

// Importing icons from Shoelace framework

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import { createContext } from 'react';
import { UserDataProvider } from './services/userDataFetch';


setBasePath('/node_modules/@shoelace-style/shoelace/dist'); // or wherever your assets live

registerIconLibrary('default', {
  resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static/icons/${name}.svg`,
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

// Ended importing

const data = createContext();

function App() {
  return (
    <UserDataProvider>
    <Router>
    <div className="container">
      <ItemCard />

      <Navbar />
        <Routes>
          <Route index path='/' element={<Featured />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
    </div>
    </Router>
    </UserDataProvider>
  );
}

export default App;
