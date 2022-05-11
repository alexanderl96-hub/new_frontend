import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import FrontPage from './Pages/FrontPage'
import Teams from '../src/Components/teamsInfo/Teams'
import TeamsPlayers from './Components/teamsPlayers/TemasPlayers'


function App() {
  
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<FrontPage/>}/>
          <Route exact path="/homeBase" element={<Teams/>}/>
          <Route exact path="/homeBase/groups" element={<TeamsPlayers/>}/>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
