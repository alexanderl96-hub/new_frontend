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
import Desing from './Components/AllMembers/desing'
import AllMembers from '../src/Components/AllMembers/desing'
import CurrentHistagram from '../src/Components/Histogram/CurrentHistagram'
import About from '../src/Components/AboutUs/about'
import News from '../src/Components/LatestsNews/News'
import SpringTraining from '../src/Components/LatestsNews/Spring'
import Exhibition from '../src/Components/LatestsNews/Exhibition'
import AllStart from '../src/Components/LatestsNews/AllStart'
import DivisionSeries from '../src/Components/LatestsNews/DivisionSeries'
import FirstRound from '../src/Components/LatestsNews/FirstRound'
import LeagueChampionship from '../src/Components/LatestsNews/LeagueChampionship'
import WorldSeries from '../src/Components/LatestsNews/WorldSeries'

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
          <Route  path="/teams/About" element={<About/>}/>
          <Route  path="/teams/News" element={<News/>}/>
          <Route  path="/teams/News/SpringTraining" element={<SpringTraining/>}/>
          <Route  path="/teams/News/Exhibition" element={<Exhibition/>}/>
          <Route  path="/teams/News/AllStart" element={<AllStart/>}/>
          <Route  path="/teams/News/DivisionSeries" element={<DivisionSeries/>}/>
          <Route  path="/teams/News/FirstRound(wildCard)" element={<FirstRound/>}/>
          <Route  path="/teams/News/LeagueChampionship" element={<LeagueChampionship/>}/>
          <Route  path="/teams/News/WorldSeries" element={<WorldSeries/>}/>
          <Route  path="/teams/groups/:id/addStats" element={<AddStats/>}/>
          <Route  path="/teams/newpage/:id" element={<Desing/>}/>  
          <Route  path="/teams/allmembers/:id" element={<AllMembers />}/> 
          <Route  path="/teams/CurrentHistagram/:id" element={<CurrentHistagram/>}/>      
         </Routes>
      </Router>
       
    </div>
  );
}

export default App;
