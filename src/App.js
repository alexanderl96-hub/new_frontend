import React from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


import Teams from '../src/Components/teamsInfo/Teams'
import IndividualMember from './Components/IndividualMember/IndividualMember'
import UpDateMember from '../src/Components/memberUpDate/MemberUpDate'
import NewTeam from '../src/Components/newTeam/NewTeam'
import NewMember from '../src/Components/newMember/NewMember'
import Allplayers from '../src/ComponentsPlayers/Players/Players'
import Coaches from '../src/ComponentsPlayers/Coaches/Coaches'
import Season from '../src/ComponentsPlayers/Season/Season'
import AddStats from '../src/Components/statsPlayers/addStatsPlayers'
import Desing from '../src/Components/desing'
import CurrentHistagram from '../src/Components/Histogram/CurrentHistagram'

function App() {
 
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route exact path="/" element={<Teams/>}/>
          <Route  path="/teams/groups/:id" element={<IndividualMember/>}/>
          <Route  path="/teams/updateMember/:id" element={<UpDateMember/>}/>
          <Route  path="/teams/new" element={<NewTeam/>}/>
          <Route  path="/teams/newMember/:id" element={<NewMember/>}/>
          <Route  path="/teams/allplayers" element={<Allplayers/>}/>
          <Route  path="/teams/allCoaches" element={<Coaches/>}/>
          <Route  path="/teams/Season" element={<Season/>}/>
          <Route  path="/teams/groups/:id/addStats" element={<AddStats/>}/>
          <Route  path="/teams/newpage/:id" element={<Desing/>}/>  
          <Route  path="/teams/CurrentHistagram/:id" element={<CurrentHistagram/>}/>      
         </Routes>
      </Router>
       
    </div>
  );
}

export default App;
