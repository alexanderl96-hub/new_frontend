import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'

const AddStatsPlayers = () => {
   const [statPlayers, setStatPlayers] = useState({
    players_id: '', 
    game: '',
    game_date: '', 
    ab: '', 
    r: '', 
    h: '', 
    rb: '', 
    bb: '', 
    so: '', 
    hr: '', 
    sb: '', 
    average: '',
   })
   const [statCareer, setStatCareer] = useState({
    players_id: '', 
    game_year: '', 
    team: '', 
    career_gp: '', 
    career_ab: '', 
    career_r: '', 
    career_h: '', 
    career_rbi: '', 
    career_bb: '', 
    career_so: '', 
    career_hr: '', 
    career_average: '',
   })
   const [statPitcher, setStatPitcher] = useState({
    players_id: '', 
    game: '', 
    game_date: '', 
    ip: '', 
    h: '', 
    r: '', 
    er: '', 
    hr: '', 
    bb: '', 
    so: '', 
    sv: '', 
    era: '',
   })
   const [statPCareer, setStatPCareer] = useState({
    pitcher_id: '', 
    game_year: '', 
    team: '', 
    career_gp: '', 
    career_cg: '', 
    career_er: '', 
    career_so: '', 
    career_w: '', 
    career_l: '', 
    career_sv: '', 
    career_whip: '', 
    career_era: '',
   })


   //create variable to store an specific obj depending of the position or the id

  let params = useParams()
  let memberId = params.id

  //use useEffect to filter into the data the position of the member id

console.log(memberId)

  return (
    <div>
        <h1>addStatsPlayers</h1>
        {/* -- check the member id and the position before display data */}
        <div style={{marginLeft: 'auto'}}>
            <h3>Add Players Stats:</h3>
            <form>
                <input type="number" placeholder={memberId}/>
                <input type="text" placeholder="game"/>
                <input type="text" placeholder="game_date"/>
                <input type="number" placeholder="ab"/>
                <input type="number" placeholder="r"/>
                <input type="number" placeholder="h"/>
                <input type="number" placeholder="rb"/>
                <input type="number" placeholder="bb"/>
                <input type="number" placeholder="so"/> 
                <input type="number" placeholder="hr"/>
                <input type="number" placeholder="sb"/>
                <input type="number" placeholder="average"/>
            </form>
            <button type="submit">Submit</button>
            {/* -- display an image of the belonging id in an independet div*/}
        </div>

        {/* -- check the member id and the position before display data */}
        <div>
           <h3>Add Career Players Stats:</h3>
            <form>
                <input type="number" placeholder={memberId}/>
                <input type="number" placeholder="game_year"/>
                <input type="text" placeholder="Team"/>
                <input type="number" placeholder="career_gp"/>
                <input type="number" placeholder="career_ab"/>
                <input type="number" placeholder="career_r"/>
                <input type="number" placeholder="career_h"/>
                <input type="number" placeholder="career_rbi"/>
                <input type="number" placeholder="career_bb"/> 
                <input type="number" placeholder="career_so"/>
                <input type="number" placeholder="career_hr"/>
                <input type="number" placeholder="career_average"/>
            </form>
            <button type="submit">Submit</button>
             {/* -- display an image of the belonging id in an independet div*/}
        </div>

        {/* -- check the member id and the position before display data */}
        <div>
            <h3>Add Pitcher Stats:</h3>
            <form>
                <input type="number" placeholder={memberId}/>
                <input type="text" placeholder="game"/>
                <input type="text" placeholder="game_date"/>
                <input type="number" placeholder="ip"/>
                <input type="number" placeholder="h"/>
                <input type="number" placeholder="r"/>
                <input type="number" placeholder="er"/>
                <input type="number" placeholder="hr"/>
                <input type="number" placeholder="bb"/> 
                <input type="number" placeholder="so"/>
                <input type="number" placeholder="sv"/>
                <input type="number" placeholder="era"/>
            </form>
            <button type="submit">Submit</button>
             {/* -- display an image of the belonging id in an independet div*/}
        </div>

        {/* -- check the member id and the position before display data */}
        <div>
            <h3>Add Career Pitcher Stats:</h3>
            <form>
                <input type="number" placeholder={memberId}/>
                <input type="number" placeholder="game_year"/>
                <input type="text" placeholder="team"/>
                <input type="number" placeholder="career_gp"/>
                <input type="number" placeholder="career_cg"/>
                <input type="number" placeholder="career_er"/>
                <input type="number" placeholder="career_so"/>
                <input type="number" placeholder="career_w"/>
                <input type="number" placeholder="career_l"/> 
                <input type="number" placeholder="career_sv"/>
                <input type="number" placeholder="career_whip"/>
                <input type="number" placeholder="career_era"/>
            </form>
            <button type="submit">Submit</button>
             {/* -- display an image of the belonging id in an independet div*/}
        </div>
    </div>
  )
}

export default AddStatsPlayers